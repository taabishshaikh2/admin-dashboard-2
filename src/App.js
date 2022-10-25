import './App.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import  Dashboard  from './components/Dashboard';


function App() {
  return (
    <div className="app shadow my-1 rounded p-2 ">
      <div className='app__left'>
        <SideBar />
      </div>
      <div className='app__right'>
        <Navbar />
        <Dashboard />
      </div>
      

    </div>
  );
}

export default App;
