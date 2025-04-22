import { useState } from 'react';
import Infomation from './Infomation';
import Education from './educational';
import Experience from './experience';

export default function App() {
  const [info, setInfo] = useState({ name: '', email: '', phone: '' });
  const [edu, setEdu] = useState({
    school: '',
    studyTittle: '',
    studyDate: '',
  });
  const [job, setJob] = useState({
    companyName: '',
    positionTitle: '',
    responsibilities: '',
    dateStart: '',
    dateEnd: '',
  });

  const [state, setState] = useState('edit');

  if (state === 'edit') {
    return (
      <>
        <Infomation info={info} setInfo={setInfo} />
        <Education edu={edu} setEdu={setEdu} />
        <Experience job={job} setJob={setJob} />
        <button onClick={() => setState('display')}>Submit</button>
      </>
    );
  } else if (state === 'display') {
    return (
      <>
        <h1>{info.name}</h1>
        <button onClick={() => setState('edit')}>Edit</button>
      </>
    );
  }
}
