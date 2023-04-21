import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./Accordion/Accordion";

function App() {

    const [collapsed, setAccordionBody] = useState<boolean>(false);

  return (
      <div className={'container'}>
          {/*<Accordion title={'Menu'} collapsed={collapsed} setAccordionBody={setAccordionBody} />*/}
      </div>
  );
}

export default App;
