import React from 'react';
import './App.css';
import Test3 from "./Class/ClassComponentTwo/Test3";

function App() {

    /*const [collapsed, setAccordionBody] = useState<boolean>(false);*/

  return (
      <div className={'container'}>
          {/*<Accordion title={'Menu'} collapsed={collapsed} setAccordionBody={setAccordionBody} />*/}
          {/*<Test2Container />*/}
          <Test3 />
      </div>
  );
}

export default App;
