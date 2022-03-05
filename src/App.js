import Routers from "./Routers";
import React, {useState} from 'react'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'


function App() {
  const [toggle, setToggle] = useState('navigation')
  // const [main, setMain] = useState('main')
  console.log(toggle)
  return (
    <div className="App">
       <Sidebar toggle={toggle} setToggle={setToggle} />
      <div className= {toggle === '#active' ? 'active main' :'main'}>
        <Header toggle={toggle} setToggle={setToggle} />
        <Routers />
      </div>
    </div>
  );
}

export default App;
