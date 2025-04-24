import { Fragment, useState } from 'react';

export default function Experience({ jobs, setJob }) {
  function handleInput(e, id) {
    const { name, value } = e.target;

    setJob((prev) => {
      return prev.map((job) => {
        if (job.id !== id) {
          return job;
        } else {
          return { ...job, [name.replace(id, '')]: value };
        }
      });
    });
  }

  function handleAddJob() {
    let newJob = {
      id: jobs.length + 1,
      companyName: '',
      positionTitle: '',
      responsibilities: '',
      dateStart: '',
      dateEnd: '',
    };
    setJob([...jobs, newJob]);
  }

  return (
    <>
      <div className="experience">
        <h1>Experience</h1>

        {jobs.map((job) => {
          return (
            <Fragment key={job.id}>
              <h3 className="company">Company {job.id}</h3>
              <div>
                <label htmlFor="company-name">Company name: </label>
                <input
                  required
                  type="text"
                  id="company-name"
                  value={job.companyName}
                  onChange={(e) => handleInput(e, job.id)}
                  name={'companyName' + job.id}
                />
              </div>
              <div>
                <label htmlFor="position-title">Position title: </label>
                <input
                  required
                  type="text"
                  id="position-title"
                  value={job.positionTitle}
                  onChange={(e) => handleInput(e, job.id)}
                  name={'positionTitle' + job.id}
                />
              </div>
              <div>
                <label htmlFor="responsibilities">Responsibilities: </label>
                <textarea
                  required
                  type="text"
                  id="responsibilities"
                  value={job.responsibilities}
                  onChange={(e) => handleInput(e, job.id)}
                  name={'responsibilities' + job.id}
                />
              </div>
              <div>
                <label htmlFor="dateStart">From: </label>
                <input
                  required
                  type="date"
                  id="dateStart"
                  value={job.dateStart}
                  onChange={(e) => handleInput(e, job.id)}
                  name={'dateStart' + job.id}
                />
              </div>
              <div>
                <label htmlFor="dateEnd">To: </label>
                <input
                  required
                  type="date"
                  id="dateEnd"
                  value={job.dateEnd}
                  onChange={(e) => handleInput(e, job.id)}
                  name={'dateEnd' + job.id}
                />
              </div>
            </Fragment>
          );
        })}
      </div>

      <button className="add-btn" onClick={handleAddJob}>
        +
      </button>
    </>
  );
}
