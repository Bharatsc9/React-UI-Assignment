
import './App.css';
import CardComp from './components/CardComp';
import DashBar from './components/DashBar';
import Header from './components/Header';
import LowerMenu from './components/LowerMenu';
import SideBar from './components/SideBar';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div className="App">
      <div className= "SideBar">
        <SideBar/>
        <SideMenu/>
        <hr className='line'></hr>
        <LowerMenu/>
      </div>
      <div className= "Main">
        <Header/>
        <DashBar/>
        <CardComp/>
      </div>
    </div>
  );
}

export default App;
