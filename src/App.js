import './App.css';
import Button from './components/Button.jsx';
import freeCodeCampLogo from './img/freecodecamp-logo.png'

function App() {

  const handleClick = () => {
    console.log('Click')
  }

  const resetCounter = () => {
    console.log('Reset')
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
