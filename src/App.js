import './App.css';
import Counter from './components/Counter.jsx';
import Button from './components/Button.jsx';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [clickNum, setClickNum] = useState(0)

  const handleClick = () => {
    setClickNum(clickNum + 1)
  }

  const resetCounter = () => {
    setClickNum(0)
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='freeCodeCamp logo' />
      </div>
      <div className='main-container'>
        <Counter 
          clickNum={clickNum}
        />
        <Button
          text='Click'
          clickButton={true}
          handleClick={handleClick} />
        <Button
          text='Reset'
          clickButton={false}
          handleClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
