import logo from './sneakerLabLOGO.jpeg';
import './App.css';
import ShoeContainer from './shoeContainer/shoeContainer';


function App() {
  return (
    <div className="App">
      <nav className='navbar'>
       <img className="logo"src={logo} alt='logo'></img>
       <div className='nav-links'>
       <a href='#'>Home</a>
       <a href='#'>Test</a>
       </div>
      </nav>
      <ShoeContainer></ShoeContainer>
    </div>
  );
}

export default App;
