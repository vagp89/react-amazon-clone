
import './App.css';
import Header from './components/Header.js'
import Home from './components/Home.js'


function App() {
  return (
    //BEM naming convention
    <div className="App">

      <Header/>
      <Home/>
    </div>
  );
}

export default App;
