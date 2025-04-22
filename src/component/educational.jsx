import { useState } from 'react';

export default function Education({ edu, setEdu }) {
  function handleInput(e) {
    const { name, value } = e.target;
    setEdu((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div className="education">
      <h1>Education</h1>

      <div>
        <label htmlFor="school">School name: </label>
        <input
          type="text"
          id="school"
          value={edu.school}
          onChange={handleInput}
          name="school"
        />
      </div>

      <div>
        <label htmlFor="studyTitle">Title of study: </label>
        <input
          type="text"
          id="studyTitle"
          value={edu.studyTittle}
          onChange={handleInput}
          name="studyTittle"
        />
      </div>

      <div>
        <label htmlFor="studyDate">Date of study: </label>
        <input
          type="text"
          id="studyDate"
          value={edu.studyDate}
          onChange={handleInput}
          name="studyDate"
        />
      </div>
    </div>
  );
}
