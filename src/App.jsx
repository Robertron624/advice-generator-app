import { useState } from 'react'
import divider from './assets/pattern-divider-desktop.svg'
import diceImg from './assets/icon-dice.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='advice__number'>ADVICE #117</h1>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, molestiae.</p>
        <img src={divider} alt="divider" />
        <a href="#" className='new__advice--btn'>
          <img src={diceImg} alt="dice icon" />
        </a>
      </div>
    </div>
  )
}

export default App
