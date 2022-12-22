import { createRef, useState } from 'react';
import './Sidebar.css';

export default function Sidebar({
  setDark,
  dark
}: {
  setDark: Function;
  dark: boolean;
}) {
  const [darkIcon, setDarkIcon] = useState(dark);
  const handleDark = () => {
    setDark((dark: boolean) => !dark);
    setDarkIcon((darkIcon: boolean) => !darkIcon);
  };

  return (
    <aside id="sidebar" className="border-stone-200 dark:border-stone-800">
      <section className="text-black dark:text-white">
        <Icon className="arrow-bar-up" href="#main" target="_self" />
        <Icon
          className={darkIcon ? 'moon' : 'sun'}
          onClick={() => handleDark()}
        />
      </section>
      <hr className="bg-stone-200 dark:bg-stone-800" />
      <section className="text-black dark:text-white">
        <Icon href="https://www.github.com/arthurmatthew" className="github" />
        <Icon href="https://www.matthewarthur.dev/" className="globe2" />
      </section>
    </aside>
  );
}

const Icon = ({
  className,
  href,
  target,
  onClick
}: {
  className: string;
  href?: string;
  target?: string;
  onClick?: Function;
}) => {
  return (
    <a
      href={href}
      className="hover:translate-x-1"
      target={target == undefined ? '_blank' : target}
      onClick={() => (onClick !== undefined ? onClick() : '')}
    >
      <i
        className={`bi bi-${className} text-3xl opacity-50 hover:opacity-100`}
      ></i>
    </a>
  );
};
