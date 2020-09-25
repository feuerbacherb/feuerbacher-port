import React, { Component } from 'react';
import PortfolioDetail from './PortfolioDetail';
import data from './portfolio.json';

export default class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Work.</h1>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {data.map((portfolioData) => {
                                return <PortfolioDetail key={portfolioData.id} data={portfolioData} />
                            })}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}