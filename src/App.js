import './App.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import  Dashboard  from './components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Attendance from './components/Attendance';



function App() {
  return (  
    <div className="app shadow my-1 rounded p-2 ">
        <BrowserRouter> 
      <div className='app__left'>
        <SideBar />
        
      </div>
      <div className='app__right'>
        <Navbar />
        {/* <Dashboard /> */}
        <Routes>
        
          <Route path='/' element={(<Dashboard />)} />
          <Route path='/attendance' element={(<Attendance />)} />
        </Routes>
      </div>
      
      {/* <Routes>
        
          {/* <Route path='/' element={(<Dashboard />)} /> 
          <Route path='/attendance' element={(<Attendance />)} />
        </Routes> */}
      
      </BrowserRouter>
    </div>
    
    
  );
}

export default App;
