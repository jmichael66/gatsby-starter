import React from "react"
import { graphql } from 'gatsby'
import Layout from "../modules/Layout"
import { StaticImage } from 'gatsby-plugin-image'

const ReportDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="report_template">
              <h2 class="h2">{title}</h2>
              <h3>{stack}</h3>
              <div>
                  {/* <StaticImage src={report.frontmatter.featured} placeholder="blurred" quality={100}/> */}
              </div>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
 
export default ReportDetails

export const query = graphql`
  query ReportDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
      }
    }
  }
`