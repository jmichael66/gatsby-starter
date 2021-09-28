const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/reports/'+ node.frontmatter.slug,
      component: path.resolve('./src/template/reports.js'),
      context: { slug: node.frontmatter.slug }
    })
  })

}