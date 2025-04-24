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

  if (state === 'edit') {
    return (
      <>
        <Infomation info={info} setInfo={setInfo} />
        <Education edus={edus} setEdu={setEdu} />
        <Experience jobs={jobs} setJob={setJob} />
        <button className="submit" onClick={() => setState('display')}>
          Submit
        </button>
      </>
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
          <h2>Education </h2>
          <p>{edus.studyTittle + ' ' + edus.school}</p>
          <hr />
        </main>

        <button className="submit" onClick={() => setState('edit')}>
          Edit
        </button>
      </div>
    );
  }
}

// Creating a Display state for the application
