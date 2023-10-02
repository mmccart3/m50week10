import { useState } from 'react';
import './App.css';
import Box from './components/box'
import Login from './components/login'

function App() {
// This is where regular 'vanilla' JavaScript goes.
//
async function fetchImages() {
  const response = await fetch("https://picsum.photos/v2/list");
  const data = await response.json();
  setPhotos(data);
  console.log(data);
}


//STATE variables goe here
const [user,setUser] = useState("Mafalda");
const [password,setPassword] = useState();
const [loggedIn, SetLoggedIn] = useState(false);
const [photos,setPhotos] = useState();

//Other variables
const myArray = [{name:"Harry", age: 15}, {name:"Hermione", age: 16}, {name:"Ron", age:15}, {name:"Ginny", age:14}]
//
  return (
    // JSX Goes here
    <div className="App">
      {
        myArray.map((item,index) => {
          return (
            <div>
              <Box name={item.name}></Box>
              <h4>{item.age}</h4>
             </div> 
          )
        })
      }
      <img src="https://picsum.photos/200" alt="a random photo from lorem picsum"/>
      <br></br>

      <button onClick={(event) => fetchImages()}>Fetch pics</button>
      <br></br>
      <button onClick={(event) => setPhotos([])}>Switch photos off</button>

      {photos && photos.map((item,index) => {
        return (
          <div>
            <img src={item.download_url} width="300px" />
          </div>
        )
      })}

      {/* <h1>Hello</h1>
      <Box name="Hermione"></Box>
      <Box name="Harry"></Box>
      <Box name="Fred"></Box>
      <Box name={user}></Box>
      <Box name={password}></Box>
      <Login setUser={setUser} setPassword={setPassword}></Login>

      {user && <h3>user exists</h3>}

      {loggedIn ? <h3>logged in</h3> : <h3>not logged in</h3>} */}


      </div>
  );
}

export default App;
