import { useState } from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={`${dark ? 'dark ' : ''}overflow-x-hidden`} id="main">
      <Navbar />
      <Sidebar dark={dark} setDark={setDark} />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
