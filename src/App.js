import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import firebase from './firebase';

function App() {
  const [showInput, setShowInput] = useState(false);
  const [titleValue, setTitleValue] = useState('');
  const [textValue, setTextValue] = useState('');

  return (
    <div className="App">
      <Header/>
      <Main
        titleValue={titleValue}
        textValue={textValue}
        showInput={showInput}
        onTitleChange = {state=>setTitleValue(state)}
        onTextChange = {(state)=>setTextValue(state)}
        onShowInput = {(state)=>setShowInput(state)}
      />
    </div>
  );
}

export default App;
