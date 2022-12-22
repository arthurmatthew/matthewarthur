import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    let data = window.sessionStorage.getItem('dark');
    setDark(data != null ? JSON.parse(data) : false);
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem('dark', JSON.stringify(dark));
  }, [dark]);

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
      <Sidebar dark={dark} setDark={setDark} />
      <Footer />
    </>
  );
}

export default App;
