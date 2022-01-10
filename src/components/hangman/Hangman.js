import React from 'react';
import { useRef, useState } from 'react';
import H0 from '../../images/hangman0.png';
import H1 from '../../images/hangman1.png';
import H2 from '../../images/hangman2.png';
import H3 from '../../images/hangman3.png';
import H4 from '../../images/hangman4.png';
import H5 from '../../images/hangman5.png';
import H6 from '../../images/hangman6.png';

function Hangman(){
  const [word, setWord] = useState('');
  const [guessingWord, setGuessingWord] = useState([]);
  const [guessedWord, setGuessedWord] = useState([]);
  const [start, setStart] = useState(true);
  const [guess, setGuess] = useState('');
  const [letter, setLetter] = useState('');
  const [alertMessage, setAlertMessage] = useState('')
  const [images, setImages] = useState([H0, H1, H2, H3, H4, H5, H6]);
  const [active, setActive] = useState(images[0])
  const [misses, setMisses] = useState([]);
  const focus = useRef(null);

  const handleWord = ({target}) =>{
    setGuessedWord([])
    setGuessingWord([])
    setWord(target.value.toUpperCase());
  }

  const handleSubmit = () =>{
    if(word !== ''){
      for(let i = 0; i < word.length; i++){
        setGuessingWord((prev) => [...prev, word[i]])
        if(word[i] === ' '){
          setGuessedWord((prev) => [...prev, '  '])
        }
        else{
          setGuessedWord((prev) => [...prev, '_'])
        }        
        setActive(images[0])
        setMisses([])
      }
      setStart(false);
    }
    else{
      setAlertMessage('You must enter a term to guess')
    }
  }

  const handleGuess = ({target}) =>{
    setGuess(target.value.toUpperCase())
  }

  const handleLetter = ({target}) =>{
    setLetter(target.value.toUpperCase())
  }

  const handleTry = () =>{
    if(guess !== ''){
      if(guess === word){
        setAlertMessage('You guessed correct');
        setGuess('')
        setGuessedWord([])
        for(let i = 0; i < word.length; i++){
          setGuessedWord((prev) => [...prev, word[i]])
        }
        setWord('')
        setTimeout(() => {setStart(true)}, 3000);
      }
      else{
        setAlertMessage('You lost')
        setActive(images[6])
        setGuess('')
        setWord('')
        setTimeout(() => {setStart(true)}, 3000);
      }
      setTimeout(() => {setAlertMessage('')}, 2500);
    }
    else if(letter !== ''){
      if(misses.includes(letter)){
        setAlertMessage('You already tried that letter')
        setTimeout(() => {setAlertMessage('')}, 2500);
        setLetter('');
      }
      else{
        if(word.includes(letter)){
          setAlertMessage('The term contains this letter')
          while(guessingWord.includes(letter)){
            let a = guessingWord.indexOf(letter)
            guessingWord[a] = '_'
            guessedWord[a] = letter
          }
          setLetter('');

          if(!guessedWord.includes('_')){
            setAlertMessage('You guessed correct');
            setWord('')
            setTimeout(() => {setStart(true)}, 3000);
          }
          setTimeout(() => {setAlertMessage('')}, 2500);
        }
        else{
          setMisses((prev) => [...prev, letter])
          setActive(images[misses.length + 1])
          if(misses.length === 5){
            setAlertMessage('You lost')
            setWord('')
            setTimeout(() => {setStart(true)}, 3000);
          }
          else{
            setAlertMessage('The term does not contain this letter')
          }
          setTimeout(() => {setAlertMessage('')}, 2500);
          setLetter('');
        }
      }
    }
  }

  return (
    <div className='hangman-app'>
      {start ? <div className='container'>
        <input value={word} type='text' placeholder='Enter the term' onChange={handleWord} ref={focus}/>
        <button onClick={handleSubmit}>Next</button>
      </div> : 
      <div>
        <h3>Guess the term</h3>
          {guessedWord.map((item) =>
            <label key={Math.random()}> {item} </label>
          )}
        <div className='container'>
          <input value={letter} type='text' placeholder='Guess the letter' maxLength='1' onChange={handleLetter}/><br/>
          <input value={guess} type='text' placeholder='Guess the term' onChange={handleGuess}/><br/>
          <button onClick={handleTry}>Guess</button>
        </div>
        <img src={active} className='image' alt='' />
        <br/>
        {misses.map((item) =>
          <label key={Math.random()} className='missed'> {item} </label>
        )}
      </div>}
      <p className='alert'>{alertMessage}</p>
    </div>
  );
}

export default Hangman