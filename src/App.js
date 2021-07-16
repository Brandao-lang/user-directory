import './App.css';
import User from './Components/User';
import { useState } from 'react';





function App() {
  const [currentUser, setCurrentUser] = useState(0)

  function btnNextHandler(count) {
    if (currentUser === 24) {
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
  
  return (
    <div className="App-main">
      <User currentUser={currentUser} btnNextHandler={btnNextHandler} btnBackHandler={btnBacktHandler}/>
      
    </div>
  );
}

export default App;
