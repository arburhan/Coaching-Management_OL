import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import TopAboutUs from './Pages/Home/TopAboutUs';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <TopAboutUs></TopAboutUs>
    </div>
  );
}

export default App;
