import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience'
import Header from './components/Header/Header';
import Proyects from './components/Proyects/Proyects';

const App = () => (
    <div className="App">
      <Header />
      <AboutMe />
      <Experience />
      <Proyects />
    </div>
);

export default App;
