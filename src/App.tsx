import { useState } from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={`${dark ? 'dark ' : ''}overflow-x-hidden`} id="main">
      <Hero />
      <Aside dark={dark} setDark={setDark} />
    </div>
  );
}

function Aside({ dark, setDark }: { dark: boolean; setDark: Function }) {
  return (
    <>
      <Header />
      <Sidebar dark={dark} setDark={setDark} />
      <Footer />
    </>
  );
}

export default App;
