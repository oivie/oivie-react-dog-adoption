import './App.css';
import { useState } from 'react';
import { data } from './data.js';



function App() {
  const [ dog, setDog ] = useState(0);
  const { id, name, description, age, image } = data[ dog ];


  const prevDog = () => {
    setDog((dog => {
      dog --;

      if (dog < 0) {
        return data.length - 1;
      }
      return dog;
    }))
  }


  const nextDog = () => {
    setDog((dog => {
      dog++;

      if (dog > data.length - 1) {
        dog = 0;
      } 
      return dog;
    }))
  }

  return (
    <div key={ id }>
      <div className='container'>
        <img src={ image } />
      </div>

      <div className='container'>
        <h1>{ name }</h1>
      </div>

      <div className='container'>
        <h3>{ description }</h3>
      </div>

      <div className='container'>
        <p> Age: { age }</p>
      </div>

      <div className='btn container'>
        <button onClick={ prevDog } >Previous</button>
        <button onClick={ nextDog }>Next</button>
      </div>
    </div>
  )
}

export default App;
