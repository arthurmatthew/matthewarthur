import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Sidebar from './components/Sidebar/Sidebar';

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
      <Projects />
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
