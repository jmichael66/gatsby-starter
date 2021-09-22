import React from 'react'

export default function Highlights() {
    return (
        <div class="highlights" data-reveal>
            <div class="container">
                <div class="highlights__title" data-reveal-sub>
                    <h2 class="h2">Financial highlights</h2>
                </div>
                <div class="highlights__main">
                    <div class="facts-grid">
                        <div class="fact" data-reveal-sub>
                            <div class="fact__label">Revenue</div>
                            <div class="fact__value">£393.8m</div>
                            <p>Growth from £328.9m to £393.8m</p>
                            <div class="fact__change">+20%</div>
                        </div>
                        <div class="fact" data-reveal-sub>
                            <div class="fact__label">Profit from operations</div>
                            <div class="fact__value">£75.7m</div>
                            <p>Growth from £45.5m to £75.7m</p>
                            <div class="fact__change">+66%</div>
                        </div>
                        <div class="fact" data-reveal-sub>
                            <div class="fact__label">Adjusted EBITDA*</div>
                            <div class="fact__value">£79.0m</div>
                            <p>Growth from £63.5m to £79.0m</p>
                            <div class="fact__change">+24%</div>
                        </div>
                        <div class="fact" data-reveal-sub>
                            <div class="fact__label">Dividend per share</div>
                            <div class="fact__value">11.7p</div>
                            <p>Growth from 10.5p to 11.7p</p>
                            <div class="fact__change">+11%</div>
                        </div>
                    </div>
                </div>
                <div class="highlights__footer" data-reveal-sub>
                    <p>* All adjusted measures set out throughout this document which are described as "adjusted" represent Alternative Performance Measures ("APMs") and are defined and reconciled in the Financial Review section and are applied consistently.</p>
                </div>
            </div>
        </div>
    )
}