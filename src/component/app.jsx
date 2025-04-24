import { useState } from 'react';
import Infomation from './Infomation';
import Education from './educational';
import Experience from './experience';
import '../index.css';

export default function App() {
  const [info, setInfo] = useState({ name: '', email: '', phone: '' });
  const [edus, setEdu] = useState([
    {
      id: 1,
      school: '',
      studyTitle: '',
      studyDate: '',
    },
  ]);
  const [jobs, setJob] = useState([
    {
      id: 1,
      companyName: '',
      positionTitle: '',
      responsibilities: '',
      dateStart: '',
      dateEnd: '',
    },
  ]);

  const [state, setState] = useState('edit');

  function handleSubmit(e) {
    // e.preventDefault();
    setState('display');
  }

  if (state === 'edit') {
    return (
      <form onSubmit={handleSubmit}>
        <Infomation info={info} setInfo={setInfo} />
        <Education edus={edus} setEdu={setEdu} />
        <Experience jobs={jobs} setJob={setJob} />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    );
  } else if (state === 'display') {
    return (
      <div id="edit-section">
        <header id="info">
          <h1 id="edit-name">{info.name}</h1>
          <p id="phone">{info.phone}</p>
          <a href={'mailto:' + info.email} id="email">
            {info.email}
          </a>
        </header>

        <main>
          <div id="edus">
            <h2>Education </h2>
            <hr />
            {edus.map((edu) => {
              return (
                <div id="edu">
                  <div className="shool-and-title">
                    <p key={edu.id}>{edu.studyTitle + ' ' + edu.school}</p>
                  </div>
                  <p className="yearStudy">{edu.studyDate}</p>
                </div>
              );
            })}
          </div>

          <div id="experience">
            <h2>Experience </h2>
            <hr />
            {jobs.map((job) => {
              return (
                <div id="job">
                  <p id="role">{job.positionTitle}</p>
                  <p>{job.companyName}</p>
                  <p>{job.responsibilities}</p>
                </div>
              );
            })}
          </div>
        </main>

        <button className="submit" onClick={() => setState('edit')}>
          Edit
        </button>
      </div>
    );
  }
}

// Creating a Display state for the application
