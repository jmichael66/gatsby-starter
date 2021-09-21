import { Link } from 'gatsby'
import React from 'react'

export default function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="footer__inner">
                    <div class="footer-logo">
                        <a href="/" aria-label="Gamma Annual Report 2020 home">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 47"><path d="M29.088 4.032c-1.872 3.168-.792 7.2 2.376 9.072 3.168 1.872 7.2.792 9.072-2.376 1.872-3.168.792-7.2-2.376-9.072-3.168-1.872-7.2-.792-9.072 2.376zM6.624 16.92a6.607 6.607 0 016.624 6.624 6.607 6.607 0 01-6.624 6.624A6.607 6.607 0 010 23.544c0-3.6 2.952-6.624 6.624-6.624zm3.528-6.408c1.728 3.24 5.76 4.392 9 2.664 3.24-1.728 4.392-5.76 2.664-9-1.728-3.24-5.76-4.392-9-2.664-3.24 1.728-4.392 5.76-2.664 9zm30.456 26.136c-1.728-3.24-5.76-4.392-9-2.664-3.24 1.728-4.392 5.76-2.664 9 1.728 3.24 5.76 4.392 9 2.664 3.24-1.8 4.464-5.76 2.664-9zm-18.936 6.48c1.872-3.168.792-7.2-2.376-9.072-3.168-1.872-7.2-.792-9.072 2.376-1.872 3.168-.792 7.2 2.376 9.072 3.168 1.872 7.272.792 9.072-2.376zm8.424-24.264a6.588 6.588 0 00-4.68-1.944 6.607 6.607 0 00-6.624 6.624 6.607 6.607 0 006.624 6.624c1.8 0 3.528-.72 4.68-1.944 3.312-3.312 6.12-3.312 9.432 0a6.588 6.588 0 004.68 1.944 6.607 6.607 0 006.624-6.624 6.607 6.607 0 00-6.624-6.624c-1.8 0-3.528.72-4.68 1.944-3.312 3.312-6.12 3.312-9.432 0z" fill="#FFF" fill-rule="nonzero"/></svg>
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
