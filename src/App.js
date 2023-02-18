import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Demo from './components/Demo';
import FAQ from './components/FAQ';
import Home from './components/Home';
import Login from './components/Login';


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </>
  );
}
