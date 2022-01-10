export default function Navigation() {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <div className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#about" className="navigation__link">
              <span>01</span>About Natours
            </a>
          </li>
          <li className="navigation__item">
            <a href="#benefits" className="navigation__link">
              <span>02</span>Your Benefits
            </a>
          </li>
          <li className="navigation__item">
            <a href="#popular-tours" className="navigation__link">
              <span>03</span>Popular Tours
            </a>
          </li>
          <li className="navigation__item">
            <a href="#stories" className="navigation__link">
              <span>04</span>Stories
            </a>
          </li>
          <li className="navigation__item">
            <a href="#book-now" className="navigation__link">
              <span>05</span>Book Now
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
