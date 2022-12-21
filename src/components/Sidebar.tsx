import { createRef, useState } from 'react';

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
    <aside className="fixed top-0 left-0 flex h-screen w-24 flex-col items-center justify-center gap-4 border-r-2 border-stone-200 px-4  dark:border-stone-800">
      <section className="flex flex-col gap-4 text-black dark:text-white">
        <Icon className="arrow-bar-up" href="#main" target="_self" />
        <Icon
          className={darkIcon ? 'moon' : 'sun'}
          onClick={() => handleDark()}
        />
      </section>
      <hr className="h-0.5 w-full border-none bg-black opacity-10 dark:bg-white" />
      <section className="flex flex-col gap-4 text-black dark:text-white">
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
      className="flex aspect-square duration-75 hover:translate-x-1"
      target={target == undefined ? '_blank' : target}
      onClick={() => (onClick !== undefined ? onClick() : '')}
    >
      <i
        className={`bi bi-${className} text-3xl opacity-50 duration-100 hover:opacity-100`}
      ></i>
    </a>
  );
};
