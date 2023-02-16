import React from 'react';
import './App.css';
import {Button} from "./04/04";

function App() {
    const subst1 = (name: string) => {
        alert(name);
    }
    const subst2 = (name: string) => {
        alert(name);
    }

  return (
      <div className={'container'}>
          <Button name={'First button'} callback={() => subst1('My name is Maks')} />
          <Button name={'Second button'} callback={() => subst2('Ma name is Fil')} />
      </div>
  );
}

export default App;
