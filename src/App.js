import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import FAQ from './components/FAQ';
import Home from './components/Home';
import HowItWorks from './components/HowItWorks';
import Login from './components/Login';
import Navigation from './routes/Navigation';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </>
  );
}
