// import logo from './goatHeader.jpeg';
import './App.css';
import Navbar from './Header/Navbar';
import Footer from './Footer/Footer';
// import ShoeContainer from './shoeContainer/shoeContainer';
import ShoeContainertwo from './shoeContainer/ShoeContainertwo';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ShoeContainertwo></ShoeContainertwo>

      <Footer/>
    </div>
  );
}

export default App;
