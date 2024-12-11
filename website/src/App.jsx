// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/nav/nav';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import About from './components/about/about';
import Dogs from './components/dogs/dogs';
import Puppies from './components/puppies/puppies';
import Contact from './components/contact/contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/puppies" element={<Puppies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;