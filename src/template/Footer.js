import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="footer__inner">
                    <div class="footer-logo">
                        <a href="/" aria-label="Gamma Annual Report 2020 home">
                            <StaticImage src="../assets/images/pastel-logo.png" placeholder="blurred" quality={100}/>   
                        </a>
                    </div>
                    <div class="footer-links">
                        <ul>
                            <li>&copy; Gamma 2021</li>
                            <li><a href="/company-information/">Contact &amp; Company information</a></li>
                            <li><a href="https://www.gammacommunicationsplc.com/terms-and-conditions/" target="_blank" rel="noopener">Terms and conditions</a></li>
                            <li><a href="https://www.gammacommunicationsplc.com/cookie-policy/" target="_blank" rel="noopener">Privacy &amp; Cookie policy</a></li>
                            <li><a href="/accessibility/">Accessibility</a></li>
                            <li>Designed and built by&nbsp;<a href="https://www.sampsonmay.com" target="_blank" rel="noopener">SampsonMay</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
