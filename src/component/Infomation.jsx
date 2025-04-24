import { useState } from 'react';

export default function Infomation({ info, setInfo }) {
  function handleInput(e) {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="infomation">
      <h1>Infomation</h1>

      <div>
        <label htmlFor="name">Name: </label>
        <input
          required
          type="text"
          id="name"
          value={info.name}
          onChange={handleInput}
          name="name"
        />
      </div>

      <div>
        <label htmlFor="email">Email: </label>
        <input
          required
          type="email"
          id="email"
          value={info.email}
          onChange={handleInput}
          name="email"
        />
      </div>

      <div>
        <label htmlFor="phone">Phone number: </label>
        <input
          required
          type="tel"
          id="phone"
          value={info.phone}
          onChange={handleInput}
          name="phone"
        />
      </div>
    </div>
  );
}
