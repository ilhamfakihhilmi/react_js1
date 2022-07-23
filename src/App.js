import './App.css';
import NavigationBar from "./components/NavigationBar";
import Intro from './components/Intro';
import Trending from './components/Trending';
import "./style/landingPage.css"

function App() {
  return (
    <div>
      {/* intro section */}
      <div className='myBG' >
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}

      {/* trending sectio */}
      <div className='trending'>
        <Trending/>
      </div>
      {/* end of trending */}
    </div>
  );
}

export default App;
