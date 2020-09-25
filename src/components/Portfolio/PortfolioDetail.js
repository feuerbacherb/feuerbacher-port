import React, { Component } from 'react';

export default class PortfolioDetail extends Component {
  render() {
    const p = this.props.data;
    console.log(p);
    return (
      <div key={p.id} className="columns portfolio-item">
        <div className="item-wrap">
            <a href={p.produrl} title={p.title} target="_blank" rel="noopener noreferrer">
                <img alt={p.id} src={`images/portfolio/${p.image}.jpg`} />
                <div className="overlay">
                    <div className="portfolio-item-meta">
                        <h5>{p.title}</h5>
                        <p>{p.description}</p>
                    </div>
                </div>
            </a>
            <a href={p.github}>
                <i className="fa fa-github" />
            </a>
        </div>
      </div>
    )
  }
}