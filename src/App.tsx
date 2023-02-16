import React, {useState} from 'react';
import './App.css';
import {Button} from "./04/04";

function App() {
    let [counter, setCounter] = useState(0);
    const subst1 = (number: number) => {
        setCounter(++counter);
    }

    const resetSubst1 = (number: number) => {
        setCounter(counter = 0);
    }

  return (
      <div className={'container'}>
          <h3 className={'counter'}>{counter}</h3>
          <Button name={'BUTTON'} callback={() => subst1(counter)} />
          <Button name={'reset'} callback={() => resetSubst1(counter)} />
      </div>
  );
}

export default App;
