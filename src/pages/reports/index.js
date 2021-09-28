import React from 'react'
import Layout from "../../modules/Layout"
import PageHeader from '../../modules/PageHeader'
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Reports = ({ data }) => {
  console.log(data)
  const reports = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div>
        <PageHeader/>
          {reports.map(report => (
            <Link to={"/reports/" + report.frontmatter.slug} key={report.id}>
              <div>
                {/* <StaticImage src={report.frontmatter.thumb} placeholder="blurred" quality={100}/> */}
                <h3>{ report.frontmatter.title }</h3>
                <p>{ report.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
    </Layout>
  );
}
 
export default Reports

// export page query
export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
  }
`