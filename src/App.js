import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Demo from './components/Demo';
import FAQ from './components/FAQ';
import Home from './components/Home';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast';
import Register from './components/Register';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Toaster position="top-right" />
    </>
  );
}
