import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience'
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Experience />
    </div>
  );
}

export default App;
