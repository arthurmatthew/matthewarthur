import { useState } from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={`${dark ? 'dark ' : ''}overflow-x-hidden`} id="main">
      <Header />
      <Sidebar dark={dark} setDark={setDark} />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
