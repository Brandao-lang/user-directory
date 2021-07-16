import './App.css';
import User from './Components/User';
import { useState } from 'react';
import data from './data';

function App() {
  const [currentUser, setCurrentUser] = useState(0)
  const [userData, setUserData] = useState(data)

  function btnNextHandler(count) {
    if (currentUser === userData.length-1) {
      return
    } 
    setCurrentUser(currentUser + 1)
  }

  function btnBacktHandler(count) {
    if (currentUser === 0) {
      return
    } 
    setCurrentUser(currentUser - 1)
  }

  function deleteHandler() {
    const newArr = [...userData]
    newArr.splice(currentUser,1)
    setUserData(newArr)
  }


  
  return (
    <div className="App-main">
      <User currentUser={currentUser} btnNextHandler={btnNextHandler} 
      btnBackHandler={btnBacktHandler} 
      userData={userData} deleteHandler={deleteHandler}/>
      
    </div>
  );
}

export default App;
