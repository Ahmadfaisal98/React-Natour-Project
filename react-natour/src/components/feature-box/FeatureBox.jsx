import React from "react";

export default function FeatureBox({ featureBox }) {
  return (
    <div className="col-1-of-4">
      <div className="feature-box">
        <i className="feature-box__icon icon-basic-world"></i>
        <h3 className="heading-tertiary u-margin-buttom-small">
          {featureBox.title}
        </h3>
        <p className="feature-box__text">{featureBox.subTitle}</p>
      </div>
    </div>
  );
}
