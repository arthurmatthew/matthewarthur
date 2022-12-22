import { ReactNode } from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="section dark:bg-stone-900">
      <h1 className="text-9xl dark:text-white">Welcome.</h1>
      <hr className="bg-stone-200 dark:bg-stone-800" />
      <article>
        <p className="text-xl dark:text-white">
          <em className="font-bold not-italic">I'm Matthew</em>. I'm a
          full-stack web developer. I work with a variety of technologies. My
          favorite language is{' '}
          <Underline color="decoration-blue-500">TypeScript</Underline>. On the
          front end, I enjoy using JavaScript frameworks like{' '}
          <Underline color="decoration-cyan-400">React</Underline>. I also enjoy
          the classic combo of{' '}
          <Underline color="decoration-orange-700">HTML</Underline>,{' '}
          <Underline color="decoration-blue-300">CSS</Underline>, and{' '}
          <Underline color="decoration-yellow-400">JavaScript</Underline>. On
          the back end, I like to use more JavaScript tools like{' '}
          <Underline color="decoration-green-500">node.js</Underline> and{' '}
          <Underline color="decoration-stone-200">express.js</Underline>. I also
          enjoy using platforms like{' '}
          <Underline color="decoration-orange-500">Firebase</Underline>.
        </p>
      </article>
    </section>
  );
}

const Underline = ({
  children,
  color
}: {
  children: ReactNode;
  color?: string;
}) => {
  return (
    <em className={`font-semibold not-italic underline decoration-1 ${color}`}>
      {children}
    </em>
  );
};
