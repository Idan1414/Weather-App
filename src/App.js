import './App.css';
import AppWeather from './components/appWheather';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <AppWeather />
      </BrowserRouter>

    </div>


  );
}

export default App;
