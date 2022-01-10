import img_natour_1 from "../../assets/img/nat-1.jpg";
import img_natour_1_large from "../../assets/img/nat-1-large.jpg";
import img_natour_2 from "../../assets/img/nat-2.jpg";
import img_natour_2_large from "../../assets/img/nat-2.jpg";
import img_natour_3 from "../../assets/img/nat-3.jpg";
import img_natour_3_large from "../../assets/img/nat-3.jpg";

export default function Composition() {
  return (
    <div className="composition">
      <img
        srcSet={`
            ${img_natour_1}        300w,
            ${img_natour_1_large} 1000w
        `}
        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em 30vw, 18.75em"
        alt="natour 1"
        className="composition__photo composition__photo--p1"
        src={img_natour_1}
      />
      <img
        srcSet={`
            ${img_natour_2}        300w,
            ${img_natour_2_large} 1000w
        `}
        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em 30vw, 18.75em"
        alt="natour 1"
        className="composition__photo composition__photo--p2"
        src={img_natour_2}
      />
      <img
        srcSet={`
            ${img_natour_3}        300w,
            ${img_natour_3_large} 1000w
        `}
        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em 30vw, 18.75em"
        alt="natour 1"
        className="composition__photo composition__photo--p3"
        src={img_natour_3}
      />
    </div>
  );
}
