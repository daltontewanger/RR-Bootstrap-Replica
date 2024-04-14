import './App.css';
import TopNavBar from './Components/TopNavBar';
import Hero from './Components/Hero';
import StoreListings from './Components/StoreListing';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <Hero />
      <StoreListings />
    </div>
  );
}

export default App;
