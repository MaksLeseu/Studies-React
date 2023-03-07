import React, {useState} from 'react';
import './App.css';
import {Input} from "./06/06";
import {InputTwo} from "./06/Input";
import {Button} from "./06/Button";
import {ButtonOnOff} from "./ButtonOnOff/ButtonOnOff";

function App() {

    let [title, setTitle] = useState('');

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ]);


  return (
      <div className={'container'}>
          {/*<Input message={message} setMessage={setMessage}/>*/}
          {/*<div>{message.map((el, index) => {*/}
          {/*    return (*/}
          {/*        <div key={index}>{el.message}</div>*/}
          {/*    )*/}
          {/*})}</div>*/}

          {/*<InputTwo
              message={message}
              setMessage={setMessage}
              setTitle={setTitle}
              title={title}
          />
          <Button
              setMessage={setMessage}
              message={message}
              name={'+'}
              title={title}
              setTitle={setTitle}
          />
          <div>{message.map((el, index) => {
              return (
                  <div key={index}>{el.message}</div>
              )
          })}</div>*/}
          <ButtonOnOff value={true}/>
          <ButtonOnOff value={false}/>
      </div>

  );
}

export default App;
