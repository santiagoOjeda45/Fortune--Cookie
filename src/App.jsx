import './App.css'
import PhrasesAuthors from './components/PhrasesAuthors'
import Background from './components/Background'
import phrases from './data/phrases.json'
import {useState} from 'react'


function App() {

  // Change the phrase and the author
  const [index, setIndex] = useState(0)

  const changePhrase = () => {

    if(index < phrases.length - 1){
      setIndex(Math.floor(Math.random() * phrases.length));
    } 
    else {
      setIndex(0)
    }

    
  }

  // Change the background
  const [image, setImage] = useState(0)

  const changeBackground = () => {

    setImage(Math.floor(Math.random()))
  }

  return (
    <>
      <PhrasesAuthors 
      data={phrases[index]}
      />

      <Background 
       index= { index }
      />

      <button className='btn' onClick={changePhrase}>Dame una galleta</button>
    </>
  )
}

export default App
