import './App.css';
import Hero from './components/Hero/Hero';
import { Plan } from './components/Plans/Plan';
import Programs from './components/programs/Programs';
import Reason from './components/Reason/Reason';
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reason />
      <Plan />
    </div>
  );
}

export default App;
