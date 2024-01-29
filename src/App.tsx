import { useState } from 'react';
import './styles/App.css';
import WelcomeScreen from './components/WelcomeScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';

const App: React.FC = () => {
  const [isWelcome, setIsWelcome] = useState<boolean>(true);

  return (
    <div id="App">
      {isWelcome && <WelcomeScreen setWelcome={setIsWelcome} />}
      <Navbar />

      <Hero welcome={isWelcome} />
      <Services />
    </div>
  );
};

export default App;
