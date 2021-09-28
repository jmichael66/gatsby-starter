import { Link, graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Navbar() {
    const data = useStaticQuery(graphql`
        query {
            site {
            siteMetadata {
                title
            }
            }
        }
    `)

    const { title } = data.site.siteMetadata

    return (
        <header class="header" data-header>
            <div class="header__main">
                <div class="container">
                    <div class="header__main-inner">
                        <div class="site-logo">
                            <a href="/" aria-label="Gamma Annual Report 2020 home">
                                <StaticImage src="../assets/images/pastel-logo.png" placeholder="blurred" quality={100}/>
                            </a>
                        </div>
                        <div class="header__navgation">
                            <div class="navigation" data-navigation>
                                <ul>
                                    <li>
                                        <Link class="has-children" to={"/reports/highlights-and-statements"}>
                                            <div>
                                                <span>Highlights and statements</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class="has-children" to={"/reports/our-business"}>
                                            <div>
                                                <span>Our business</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class="has-children" to={"/reports/esg-report/"}>
                                            <div>
                                                <span>ESG Report</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class="has-children" to={"/reports/governance-report/"}>
                                            <div>
                                                <span>Governance report</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class="has-children" to={"/reports/financial-statements/"}>
                                            <div>
                                                <span>Financial statements</span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>

                            </div>
                            
                            <button class="navigation-toggle" data-navigation-toggle>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24"><g fill="none" fill-rule="evenodd"><path d="M.5 0h24v24H.5z"/><path d="M3.5 18h18v-2h-18v2zm0-5h18v-2h-18v2zm0-7v2h18V6h-18z" fill="currentColor" fill-rule="nonzero"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24"><g fill="none" fill-rule="evenodd"><path d="M.5 0h24v24H.5z"/><path fill="currentColor" fill-rule="nonzero" d="M19.5 6.41L18.09 5l-5.59 5.59L6.91 5 5.5 6.41 11.09 12 5.5 17.59 6.91 19l5.59-5.59L18.09 19l1.41-1.41L13.91 12z"/></g></svg>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
