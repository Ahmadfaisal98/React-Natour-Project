import React from "react";
import img_nat_8 from "../../assets/img/nat-8.jpg";
import img_nat_8_small from "../../assets/img/nat-8-small.jpg";
import img_nat_9 from "../../assets/img/nat-9.jpg";
import img_nat_9_small from "../../assets/img/nat-9-small.jpg";

export default function Popup() {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img
            srcSet={`${img_nat_8_small} 1200w, ${img_nat_8} 2000w`}
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em 30vw, 37.5em"
            alt="Tour Popup"
            className="popup__img"
            src={img_nat_8}
          />

          <img
            srcSet={`${img_nat_9_small} 1200w, ${img_nat_9} 2000w`}
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em 30vw, 37.5em"
            alt="Tour Popup"
            className="popup__img"
            src={img_nat_9}
          />
        </div>

        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-buttom-small">
            Start booking now
          </h2>
          <h3 className="heading-tertiary u-margin-buttom-small">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            eligendi maxime voluptas sed enim autem sunt blanditiis quisquam
            delectus doloremque, molestias repudiandae sequi! In, porro? Cumque
            quidem doloribus ratione, tempora iusto earum, amet nobis ipsam eius
            qui laudantium quisquam omnis neque, ipsum molestiae natus
            reiciendis consequatur deserunt. Labore alias minus libero neque ab
            numquam ratione nisi fugiat aperiam quos.
          </p>
          <a href="#book-now" className="btn btn--green">
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
