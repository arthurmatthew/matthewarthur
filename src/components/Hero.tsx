import { ReactNode } from 'react';
import Blob from '../assets/blob.svg';

export default function Hero() {
  return (
    <section className="flex h-screen w-screen items-center justify-center">
      <div className="flex w-full flex-col gap-4 px-64">
        <h1 className="serif text-9xl italic tracking-tighter">Welcome.</h1>
        <hr className="h-0.5 border-none bg-black opacity-5" />
        <article>
          <p className="sans-serif w-3/4 text-xl">
            <em className="font-bold not-italic">I'm Matthew</em>. I'm a
            full-stack web developer. I work with a variety of technologies. My
            favorite language is{' '}
            <Underline color="decoration-blue-500">TypeScript</Underline>. On
            the front end, I enjoy using JavaScript frameworks like{' '}
            <Underline color="decoration-cyan-400">React</Underline>. I also
            enjoy the classic combo of{' '}
            <Underline color="decoration-orange-700">HTML</Underline>,{' '}
            <Underline color="decoration-blue-300">CSS</Underline>, and{' '}
            <Underline color="decoration-yellow-400">JavaScript</Underline>. On
            the back end, I like to use more JavaScript tools like{' '}
            <Underline color="decoration-green-500">node.js</Underline> and{' '}
            <Underline color="decoration-stone-200">express.js</Underline>. I
            also enjoy using platforms like{' '}
            <Underline color="decoration-orange-500">Firebase</Underline>.
          </p>
        </article>
      </div>
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
