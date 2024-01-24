import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Category from './pages/Catagory';
import Favorite from './pages/Favorite';



function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/catagory/:type' element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
