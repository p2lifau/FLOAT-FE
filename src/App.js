// import logo from './goatHeader.jpeg';
import './App.css';
import Navbar from './Header/Navbar';
import Footer from './Footer/Footer';
import ShoeContainer from './shoeContainer/shoeContainer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <ShoeContainer></ShoeContainer>
      <Footer/>
    </div>
  );
}

export default App;
