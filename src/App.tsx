import React, {useState} from 'react';
import './App.css';
import {Input} from "./06/06";
import {InputTwo} from "./06/Input";
import {Button} from "./06/Button";
import {ButtonOnOff} from "./ButtonOnOff/ButtonOnOff";
import {Accordion} from "./Accordion/Accordion";
import {Star} from "./Star/Star";

export type LevelStarType = 0 | 1 | 2 | 3 | 4 | 5;

function App() {

    let [title, setTitle] = useState('');

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ]);

    let [levelStar, setLevelStar] = useState <LevelStarType>(0);

    function changeLevelStar(id: number) {
        if (id === 1) levelStar === 1 ? setLevelStar(0) : setLevelStar(1);
        if (id === 2) levelStar === 2 ? setLevelStar(1) : setLevelStar(2);
        if (id === 3) levelStar === 3 ? setLevelStar(2) : setLevelStar(3);
        if (id === 4) levelStar === 4 ? setLevelStar(3) : setLevelStar(4);
        if (id === 5) levelStar === 5 ? setLevelStar(4) : setLevelStar(5);
    }


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
          {/*<ButtonOnOff value={true}/>
          <ButtonOnOff value={false}/>

          <Accordion title={'Title - One'} collapsed={true} />
          <Accordion title={'Title - Two'} collapsed={false} />*/}

          <Star level={levelStar} setLevelStar={setLevelStar} levelStar={levelStar} changeLevelStar={changeLevelStar} />
      </div>

  );
}

export default App;
