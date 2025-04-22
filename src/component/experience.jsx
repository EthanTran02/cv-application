import { useState } from 'react';

export default function Experience({ job, setJob }) {
  function handleInput(e) {
    const { name, value } = e.target;
    setJob((prev) => ({ ...prev, [name]: value }));
  }

  function handleClick() {
    return <Experience />;
  }

  return (
    <div className="experience">
      <h1>Experience</h1>

      <h3 className="company">Company 1</h3>
      <div>
        <label htmlFor="company-name">Company name: </label>
        <input
          type="text"
          id="company-name"
          value={job.companyName}
          onChange={handleInput}
          name="companyName"
        />
      </div>

      <div>
        <label htmlFor="position-title">Position title: </label>
        <input
          type="text"
          id="position-title"
          value={job.positionTitle}
          onChange={handleInput}
          name="positionTitle"
        />
      </div>

      <div>
        <label htmlFor="responsibilities">Responsibilities: </label>
        <input
          type="text"
          id="responsibilities"
          value={job.responsibilities}
          onChange={handleInput}
          name="responsibilities"
        />
      </div>

      <div>
        <label htmlFor="dateStart">From: </label>
        <input
          type="date"
          id="dateStart"
          value={job.dateStart}
          onChange={handleInput}
          name="dateStart"
        />
      </div>

      <div>
        <label htmlFor="dateEnd">To: </label>
        <input
          type="date"
          id="dateEnd"
          value={job.dateEnd}
          onChange={handleInput}
          name="dateEnd"
        />
      </div>

      <button className="add-btn" onClick={handleClick}>
        +
      </button>
    </div>
  );
}
