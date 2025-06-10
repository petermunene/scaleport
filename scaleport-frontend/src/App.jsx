import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/About';
import Employer from './pages/Employer';
import Employee from './pages/Employee';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/employer" element={<Employer />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
    </>
  );
}

export default App;
