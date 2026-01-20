import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Shop from './pages/Shop';
import Recipes from './pages/Recipes';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
