import React, {useState} from 'react';
import './App.css';
import {Search} from "./Search/Search";
import {BrowserRouter} from "react-router-dom";

function App() {

    let [title, setTitle] = useState('');

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ]);


  return (
      <div className={'container'}>
          <BrowserRouter>
              <Search />
          </BrowserRouter>

          {/*<Input message={message} setMessage={setMessage}/>*/}
          {/*<div>{message.map((el, index) => {*/}
          {/*    return (*/}
          {/*        <div key={index}>{el.message}</div>*/}
          {/*    )*/}
          {/*})}</div>*/}

         {/* <InputTwo
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
      </div>

  );
}

export default App;
