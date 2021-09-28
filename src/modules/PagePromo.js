import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export default function PagePromo() {
    return (
        <div class="page-promo" data-reveal>
            <div class="container">
                <div class="page-promo__title" data-reveal-sub>
                    <h2 class="h2">Environmental, Social and Governance report</h2>
                </div>
                <div class="page-promo__main">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="page-promo__image" data-reveal-sub>
                                <div class="media media--4-3">
                                    <div class="media__item">
                                        <StaticImage src="../assets/images/banner.png" placeholder="blurred" quality={80}/>
                                    </div>  
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 offset-lg-1">
                            <div class="page-promo__content" data-reveal-sub>
                                <p class="standfirst">Pastel takes its responsibilities towards the environment seriously.<br />We are committed to social responsibility and embed this into our policies and practices.<br/> We believe that sound corporate governance is essential.</p>
                                <div>
                                    <Link class="button" to={"/reports/esg-report/"}>View ESG report</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}