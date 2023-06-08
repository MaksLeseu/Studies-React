import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./Accordion/Accordion";
import {Clock} from "./Clock/Clock";
import {Counter} from "./Counter/Counter";

function App() {

    const [collapsed, setAccordionBody] = useState<boolean>(false);

  return (
      <div className={'container'}>
          {/*<Accordion title={'Menu'} collapsed={collapsed} setAccordionBody={setAccordionBody} />*/}
          <Counter />
      </div>
  );
}

export default App;
