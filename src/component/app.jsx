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
    e.preventDefault();
    setState('display');
  }

  if (state === 'edit') {
    return (
      <div className="container">
        <h1 className="app-title">Resume Builder</h1>
        <form onSubmit={handleSubmit} className="form-container">
          <Infomation info={info} setInfo={setInfo} />
          <Education edus={edus} setEdu={setEdu} />
          <Experience jobs={jobs} setJob={setJob} />
          <button className="submit" type="submit">
            Generate Resume
          </button>
        </form>
      </div>
    );
  } else if (state === 'display') {
    return (
      <div className="resume-container">
        <div className="resume-header">
          <h1 className="resume-name">{info.name}</h1>
          <div className="resume-contact">
            <p className="resume-phone">
              <span className="icon">📞</span> {info.phone}
            </p>
            <a href={'mailto:' + info.email} className="resume-email">
              <span className="icon">✉️</span> {info.email}
            </a>
          </div>
        </div>

        <main className="resume-content">
          <section className="resume-section">
            <h2 className="section-title">Education</h2>
            <div className="section-underline"></div>
            {edus.map((edu) => (
              <div className="education-item" key={edu.id}>
                <div className="education-main">
                  <h3 className="education-degree">{edu.studyTitle}</h3>
                  <p className="education-school">{edu.school}</p>
                </div>
                <p className="education-date">{edu.studyDate}</p>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <h2 className="section-title">Experience</h2>
            <div className="section-underline"></div>
            {jobs.map((job) => (
              <div className="job-item" key={job.id}>
                <div className="job-header">
                  <h3 className="job-title">{job.positionTitle}</h3>
                  <p className="job-date">
                    {job.dateStart && job.dateEnd
                      ? `${new Date(job.dateStart).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                        })} - ${new Date(job.dateEnd).toLocaleDateString(
                          'en-US',
                          {
                            year: 'numeric',
                            month: 'short',
                          }
                        )}`
                      : ''}
                  </p>
                </div>
                <p className="job-company">{job.companyName}</p>
                <p className="job-description">{job.responsibilities}</p>
              </div>
            ))}
          </section>
        </main>

        <div className="actions">
          <button className="edit-button" onClick={() => setState('edit')}>
            Edit Resume
          </button>
          <button className="print-button" onClick={() => window.print()}>
            Print / Save PDF
          </button>
        </div>
      </div>
    );
  }
}
