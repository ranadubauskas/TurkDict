import React from 'react';
import ReactDOM from 'react-dom';
import {Vocab} from './vocab-list'

export default function App() {
  const randomNum = Math.floor(Math.random()* Math.floor(Vocab.length))
  function newWord() {
    window.location.reload(false);
  }
  return (
    <div className="App">
      <h1> English: {Vocab[randomNum].FIELD1} </h1>
      <h3> Turkish: {Vocab[randomNum].FIELD2} </h3>
      <button className= "btn" onClick={newWord}> <span> NEW WORD! </span> </button>
      <h6> Created By Rana Dubauskas </h6>
    </div>
  );
  }
  

ReactDOM.render(<App />, document.getElementById('root'));