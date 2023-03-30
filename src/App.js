import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage';
import { useState } from 'react';
import Update from './components/Update';

function App() {

  const [arr, setArr] = useState([])
  const addToArr = (obj1, obj2,inp,total) => {
    let a = obj1.coinName
    let b = obj2.coinName
    setArr([...arr, { a, b,inp,total }])
  }
console.log(arr)
  const [coins, setCoins] = useState([
    { coinName: 'dolar', coinValue: 3.56 },
    { coinName: 'euro', coinValue: 3.87 },
    { coinName: 'shekel', coinValue: 1 }
  ])

  const addNewCoin = (name, value) => {
    for (let i = 0; i < coins.length; i++) {
      if (name == coins[i].coinName) {
        coins[i].coinValue = value
        setCoins([...coins])
        break
      }
      else {
        setCoins([...coins, { coinName: name, coinValue: value }])
      }
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Homepage coins={coins} arr={arr} setArr={setArr} addToArr={addToArr} />} />
          <Route path='/update' element={<Update coins={coins} addNewCoin={addNewCoin} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
