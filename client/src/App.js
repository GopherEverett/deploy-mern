import {Routes, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Navigation from './components/Navigation';
import NewPlant from './components/NewPlant';
import PlantDetail from './components/PlantDetail';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='new' element={<NewPlant />}/>
        <Route path=':id' element={<PlantDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
