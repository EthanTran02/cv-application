import { Fragment, useState } from 'react';

export default function Education({ edus, setEdu }) {
  function handleInput(e, id) {
    const { name, value } = e.target;

    setEdu((prev) => {
      return prev.map((school) => {
        if (school.id !== id) {
          return school;
        } else {
          return { ...school, [name.replace(id, '')]: value };
        }
      });
    });
  }

  function handleAddEdu() {
    let newSchool = {
      id: edus.length + 1,
      school: '',
      studyTitle: '',
      studyDate: '',
    };
    setEdu([...edus, newSchool]);
  }

  return (
    <>
      <div className="education">
        <h1>Education</h1>

        {edus.map((edu) => {
          return (
            <Fragment key={edu.id}>
              <h3 className="shool">School {edu.id}</h3>
              <div>
                <label htmlFor="school">School name: </label>
                <input
                  required
                  type="text"
                  id="school"
                  value={edu.school}
                  onChange={(e) => handleInput(e, edu.id)}
                  name="school"
                />
              </div>

              <div>
                <label htmlFor="studyTitle">Title of study: </label>
                <input
                  required
                  type="text"
                  id="studyTitle"
                  value={edu.studyTitle}
                  onChange={(e) => handleInput(e, edu.id)}
                  name="studyTitle"
                />
              </div>

              <div>
                <label htmlFor="studyDate">Date of study: </label>
                <input
                  required
                  type="text"
                  id="studyDate"
                  value={edu.studyDate}
                  onChange={(e) => handleInput(e, edu.id)}
                  name="studyDate"
                />
              </div>
            </Fragment>
          );
        })}
        <button className="add-btn" onClick={handleAddEdu}>
          +
        </button>
      </div>
    </>
  );
}
