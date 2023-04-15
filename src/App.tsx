import React, {useState} from 'react';
import './App.css';
import {Input} from "./06/06";
import {InputTwo} from "./06/Input";
import {Button} from "./06/Button";
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Content} from "./components/Content/Content";
import {Select} from "./Select/Select";

function App() {

    /*let [title, setTitle] = useState('');

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ]);*/


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

          {/*<Header />
         <div className={'body'}>
             <Sidebar />
             <Content />
         </div>*/}

          <Select />

      </div>

  );
}

export default App;
