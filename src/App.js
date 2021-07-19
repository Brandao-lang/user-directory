import './App.css';
import User from './Components/User';
import { useState } from 'react';
import data from './data';
import NewUser from './Components/NewUser';
import EditUser from './Components/EditUser';
import Navigator from './Components/Navigation';
import './Styles/buttons.css'


function App() {
  const [currentUser, setCurrentUser] = useState(0)
  const [userData, setUserData] = useState(data)

  function btnNextHandler() {
    if (currentUser === userData.length-1) {
      return
    } 
    setCurrentUser(currentUser + 1)
  }

  function btnBacktHandler() {
    if (currentUser === 0) {
      return
    } 
    setCurrentUser(currentUser - 1)
  }

  function deleteHandler() {
    if (userData.length === 1) {
      return
    }
    const newArr = [...userData]
    newArr.splice(currentUser,1)
    setUserData(newArr)
    if(currentUser === userData.length-1) {
      setCurrentUser(currentUser-1)
    } 
  }

  function addHandler(newUser) {
    setUserData([...userData, newUser])
  }

  function editHandler(edits) {
    const changedArr = [...userData]
    changedArr.splice(currentUser,1,edits)
    setUserData(changedArr)
  }



  return (
    <div className="App-main">
      <User currentUser={currentUser} userData={userData} />
      <Navigator  btnNextHandler={btnNextHandler} 
      btnBackHandler={btnBacktHandler} deleteHandler={deleteHandler}/>
      <NewUser userData={userData} currentUser={currentUser} addHandler={addHandler}/>
      <EditUser userData={userData} currentUser={currentUser} editHandler = {editHandler}/>
    </div>
  );
}

export default App;
