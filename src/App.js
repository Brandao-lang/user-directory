import './App.css';
import User from './Components/User';
import { useState } from 'react';
import data from './data';
import NewUser from './Components/NewUser';
import EditUser from './Components/EditUser';
import Navigator from './Components/Navigation';

function App() {
  const [currentUser, setCurrentUser] = useState(0)
  const [userData, setUserData] = useState(data)
  const [createIsOpen, setCreateIsOpen] = useState(false)
  const [editorIsOpen, setEditorIsOpen] = useState(false)

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

  function editOpener () {
    setEditorIsOpen(!editorIsOpen)
  }
  
  function createOpener () {
    setCreateIsOpen(!createIsOpen)
  }

  return (
    <div className="App-main">
      <User currentUser={currentUser} userData={userData} />
      <Navigator  btnNextHandler={btnNextHandler} 
      btnBackHandler={btnBacktHandler} deleteHandler={deleteHandler} editOpener={editOpener} createOpener={createOpener}/>
      <NewUser userData={userData} currentUser={currentUser} addHandler={addHandler} createIsOpen={createIsOpen} createOpener={createOpener}/>
      <EditUser userData={userData} currentUser={currentUser} editHandler = {editHandler} editorIsOpen={editorIsOpen} editOpener={editOpener}/>
    </div>
  );
}

export default App;
