import React from "react";

export default function Card({ card, index }) {
  return (
    <div className="col-1-of-3">
      <div className="card">
        <div className="card__side card__side--front">
          <div className={`card__picture card__picture--${index + 1}`}>
            &nbsp;
          </div>
          <h4 className="card__heading">
            <span
              className={`
                        card__heading-span
                        card__heading-span--${index + 1}
                      `}
            >
              {card.title}
            </span>
          </h4>
          <div className="card__details">
            <ul>
              {card.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`
                    card__side 
                    card__side--back 
                    card__side--back-${index + 1}
                  `}
        >
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">{card.value}</p>
            </div>
            <a href="#popup" className="btn btn--white">
              Book now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
