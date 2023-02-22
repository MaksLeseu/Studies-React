import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./05/05";
import {Input} from "./06/06";

function App() {

    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: 'a1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'z1234567890'},
        {banknote: 'ruble', nominal: 100, number: 'w1234567890'},
        {banknote: 'dollar', nominal: 100, number: 'e1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'c1234567890'},
        {banknote: 'ruble', nominal: 100, number: 'r1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'x1234567890'},
        {banknote: 'ruble', nominal: 50, number: 'v1234567890'}
    ]);

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ]);

    const [filter, setFilter] = useState('all');

    let currentMoney = money;
    if (filter === 'dollar') {
        currentMoney = money.filter((item) => {
            return item.banknote === 'dollar';
        });
    }
    if (filter === 'ruble') {
        currentMoney = money.filter((item) => {
            return item.banknote === 'ruble';
        });
    }
    function filterHandler(nameButton: string) {
        setFilter(nameButton);
    }


  return (
      <div className={'container'}>
          <NewComponent func={filterHandler} current={currentMoney}/>
          <Input message={message} setMessage={setMessage}/>
          <div>{message.map((el, index) => {
              return (
                  <div key={index}>{el.message}</div>
              )
          })}</div>
      </div>

  );
}

export default App;
