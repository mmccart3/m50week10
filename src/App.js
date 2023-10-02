import { useState } from 'react';
import './App.css';
import Box from './components/box'
import Login from './components/login'

function App() {
// This is where regular 'vanilla' JavaScript goes.
//
//STATE variables goe here
const [user,setUser] = useState("Mafalda");
const [password,setPassword] = useState()
//
  return (
    // JSX Goes here
    <div className="App">
      <h1>Hello</h1>
      <Box name="Hermione"></Box>
      <Box name="Harry"></Box>
      <Box name="Fred"></Box>
      <Box name={user}></Box>
      <Box name={password}></Box>

      <Login setUser={setUser} setPassword={setPassword}></Login>
    </div>
  );
}

export default App;
