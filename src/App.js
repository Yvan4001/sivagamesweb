import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Styles/App.css';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navigation />
          <Home/>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
