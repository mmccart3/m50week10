import { useEffect, useState } from 'react';
import './App.css';

import Register from './components/register';
import Login from "./components/login"
import Listusers from './components/listusers';
import Logout from './components/logout';

function App() {
// This is where regular 'vanilla' JavaScript goes.

//JS FUNCTIONS go here
  async function fetchImages() {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setPhotos(data);
    console.log(data);
  }

//USEEFFECT goes here
useEffect(() => {
  fetchImages()
}, [])

//STATE variables goe here
const [username,setUsername] = useState("Mafalda");
const [password,setPassword] = useState();
const [email,setEmail] = useState();
const [loggedIn, setLoggedIn] = useState(false);
const [photos,setPhotos] = useState();
const [message,setMessage] =useState();
const [userList, setUserList] = useState();

//Other variables

  return (
    // JSX Goes here
    <div className="App">

      <button onClick={(event) => fetchImages()}>Fetch pics</button>
      <br></br>
      <button onClick={(event) => setPhotos([])}>Switch photos off</button>

      {/* {photos && photos.map((item,index) => {
        return (
          <div>
            <img src={item.download_url} width="300px" />
          </div>
        )
      })} */}
      <h1>{username}</h1>
      {loggedIn ? <h1>is logged in</h1> : <h1>is NOT logged in</h1> }
      <Register setUsername = {setUsername} setEmail = {setEmail} setPassword = {setPassword} setMessage = {setMessage}
                username ={username} password={password} email={email} setLoggedIn={setLoggedIn}>
      </Register>
      <Login setUsername = {setUsername} setPassword = {setPassword} setMessage = {setMessage}
                username ={username} password={password} email={email} setLoggedIn={setLoggedIn}>
      </Login>
      <h1>User Message: {message}</h1>
      <Listusers setUserList = {setUserList} userList = {userList}></Listusers>
      <Logout setUsername = {setUsername} setLoggedIn ={setLoggedIn} setUserList={setUserList}></Logout>
      </div>

  );
}

export default App;
