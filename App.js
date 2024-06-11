import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './router/Home';
import About from './router/About';
import Service from './router/Service';
function App() {
  return (
    <div className="App">
      <Routes>
     <Route path="/home" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/service" element={<Service/>}/>
     </Routes>
    </div>
  );
}

export default App;
