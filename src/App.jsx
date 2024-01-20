import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Category from './pages/Catagory';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catagory/:type' element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
