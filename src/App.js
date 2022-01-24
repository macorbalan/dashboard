import React from 'react'; 
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './vistas/home/Home'
import "./App.css"
function App() {
  return (
    <div className="App">
      <Topbar/>
        <div className='container'>
          <Sidebar/>
        
            <Home/>

          
        </div>

     
    </div>
  );
}

export default App;
