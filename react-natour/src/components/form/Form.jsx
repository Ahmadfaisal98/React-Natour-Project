import React from "react";

export default function Form() {
  return (
    <form action="#" className="form">
      <div className="u-margin-buttom-medium">
        <h2 className="heading-secondary">Start Booking Now</h2>
      </div>

      <div className="form__group">
        <input
          type="text"
          className="form__input"
          placeholder="Full name"
          required
          id="name"
        />
        <label htmlFor="name" className="form__label">
          Full name
        </label>
      </div>

      <div className="form__group">
        <input
          type="email"
          className="form__input"
          placeholder="Email address"
          required
          id="email"
        />
        <label htmlFor="email" className="form__label">
          Email address
        </label>
      </div>

      <div className="form__group u-margin-buttom-medium">
        <div className="form__radio-group">
          <input
            type="radio"
            className="form__radio-input"
            id="small"
            name="size"
          />
          <label htmlFor="small" className="form__radio-label">
            <span className="form__radio-button"></span>
            Small tour group
          </label>
        </div>

        <div className="form__radio-group">
          <input
            type="radio"
            className="form__radio-input"
            id="large"
            name="size"
          />
          <label htmlFor="large" className="form__radio-label">
            <span className="form__radio-button"></span>
            Large tour group
          </label>
        </div>
      </div>

      <div className="form__group">
        <button className="btn btn--green">Next step &rarr;</button>
      </div>
    </form>
  );
}
