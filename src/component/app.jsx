import { useState } from 'react';
import Infomation from './Infomation';
import Education from './educational';
import Experience from './experience';

export default function App() {
  const [info, setInfo] = useState({ name: '', email: '', phone: '' });

  const [state, setState] = useState('edit');

  if (state === 'edit') {
    return (
      <>
        <Infomation info={info} setInfo={setInfo} />
        <Education />
        <Experience />
        <button onClick={() => setState('display')}>Submit</button>
      </>
    );
  } else if (state === 'display') {
    <h1></h1>;
    return <button onClick={() => setState('edit')}>Edit</button>;
  }
}
