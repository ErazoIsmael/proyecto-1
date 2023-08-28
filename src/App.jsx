
import { useState } from 'react'
import './App.css'
import BtnQuote from './components/BtnQuote'
import Quote from './components/Quote'
import phrase from './utils/phrase.json'
import getRandomElement from './utils/getRandomElemetArray'

function App() {
  
const phraseRandom=getRandomElement(phrase);
const numberRandom=getRandomElement([1,2,3,4])
const [qoute, setQoute] = useState(getRandomElement(phrase))
const [numberBg,setNumberBg] =useState(numberRandom) 
const bgStyle={
backgroundImage:`url(/fondo${numberBg}.png)`
}
  return (
    <div style={bgStyle} className='conteiner'>
      <h1 className='title'> Galleta de la fortuna </h1>
  
    <Quote phrase={qoute} /> 
    <BtnQuote 
      setQoute={setQoute}
      phrases={phrase}
      setNumberBg={setNumberBg}
    />
    
    
    </div>
  )
}

export default App
