import React from "react";

export default function Story({ story }) {
  return (
    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img
            srcSet={`
                  ${story.photo}      1200w,
                  ${story.photoSmall} 2000w
                `}
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em 30vw, 18.75em"
            alt="Person on a tour"
            className="story__img"
            src={story.photo}
          />
          <figcaption className="story__caption">{story.person}</figcaption>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            {story.title}
          </h3>
          <p>{story.caption}</p>
        </div>
      </div>
    </div>
  );
}
