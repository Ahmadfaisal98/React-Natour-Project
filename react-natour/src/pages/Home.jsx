import Navigation from "../layout/navigation/Navigation";
import Header from "../layout/header/Header";
import Composition from "../components/composition/Composition";
import FeatureBox from "../components/feature-box/FeatureBox";
import Card from "../components/card/Card";
import BgVideo from "../components/bg-video/BgVideo";
import Story from "../components/story/Story";
import { dataFeatureBoxes, dataCards, dataStories } from "./dataHome";
import Form from "../components/form/Form";
import Footer from "../layout/footer/Footer";
import Popup from "../components/popup/Popup";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Header />

      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-buttom-small">
              You're going to falll in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              quaerat sit dolorum. Porro, atque necessitatibus. Non, minima
              modi! Et fugiat error quas corrupti quis unde rem facere deleniti
              vitae provident?
            </p>

            <h3 className="heading-tertiary u-margin-buttom-small">
              Live adventures like you never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              asperiores eum, repudiandae corporis soluta ipsam.
            </p>

            <a href="#about" className="btn-text">
              Learn More &rarr;
            </a>
          </div>

          <div className="col-1-of-2">
            <Composition />
          </div>
        </div>
      </section>

      <section className="section-features">
        <div className="row">
          {dataFeatureBoxes.map((featureBox) => (
            <FeatureBox featureBox={featureBox} key={featureBox.title} />
          ))}
        </div>
      </section>

      <section className="section-tours" id="section-tours">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Most Popular Tours</h2>
        </div>

        <div className="row">
          {dataCards.map((card, index) => (
            <Card card={card} index={index} key={card.title} />
          ))}
        </div>

        <div className="u-center-text u-margin-top-huge">
          <a href="#about" className="btn btn--green">
            Discover all tours
          </a>
        </div>
      </section>

      <section className="section-stories">
        <BgVideo />

        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">We make people genuinely happy</h2>
        </div>

        {dataStories.map((story, index) => (
          <Story story={story} key={story.title} />
        ))}

        <div className="u-center-text u-margin-top-huge">
          <a href="#about" className="btn-text">
            Read all stories &rarr;
          </a>
        </div>
      </section>

      <section className="section-book">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <Form />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Popup />
    </div>
  );
}
