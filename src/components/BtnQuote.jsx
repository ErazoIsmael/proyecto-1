import React from 'react'
import getRandomElement from '../utils/getRandomElemetArray'

const BtnQuote = ({setQoute,phrases,setNumberBg}) => {
 
 const handleRandomPhrase =()=>{
   setQoute(getRandomElement(phrases)) 
   setNumberBg(getRandomElement([1,2,3,4]))
 }

 
    return (
    <button className="boton" onClick={handleRandomPhrase}>Other phrase 🔄️</button>
  )
}

export default BtnQuote