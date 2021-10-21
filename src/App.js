//import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/Navigation';
import HomePageSlider from './components/homePage/HomePageSlider';
import BrandSelect from './components/homePage/BrandSelect';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="main-content-scrollable">
        <HomePageSlider />
        <BrandSelect />
      </div>
    </div>
  );
}

export default App;
