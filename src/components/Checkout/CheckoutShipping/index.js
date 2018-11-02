import React from "react";

function CheckoutShipping({
  state,
  handleChange,
  handleCountry,
  handleSubmit
}) {
  return (
    <div className="checkout__shipping">
      <form action="" onSubmit={e => handleSubmit(e)}>
        <div>
          <label htmlFor="firstName">First Name </label>
          <input
            type="text"
            name="firstName"
            onChange={e => handleChange(e)}
            placeholder="First Name"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name </label>
          <input
            type="text"
            name="lastName"
            onChange={e => handleChange(e)}
            placeholder="Last Name"
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country </label>

          <select
            name="country"
            onChange={e => handleCountry(e)}
            placeholder="Country"
            required
          >
            <option>Country</option>
            {state.countries.map((country, index) => (
              <option key={index}>{country.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="city">City </label>

          <input
            type="text"
            name="city"
            onChange={e => handleChange(e)}
            placeholder="City"
            required
          />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code </label>

          <input
            type="number"
            name="postalCode"
            onChange={e => handleChange(e)}
            placeholder="Postal Code"
            required
          />
        </div>
        <div>
          <label htmlFor="adress">Adress </label>
          <input
            type="text"
            name="adress"
            onChange={e => handleChange(e)}
            placeholder="Adress"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            onChange={e => handleChange(e)}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone </label>

          <input
            type="tel"
            name="phone"
            onChange={e => handleChange(e)}
            placeholder="Phone number"
            defaultValue={
              state.shipping.country
                ? "+" + state.shipping.country.callingCodes[0]
                : ""
            }
            required
          />
        </div>
        <button type="submit" className="button">
          Continue
        </button>
      </form>
    </div>
  );
}

export default CheckoutShipping;
