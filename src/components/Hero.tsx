import './Hero.css';
import Underline from './Underline';

export default function Hero() {
  return (
    <section id="hero" className="section dark:bg-stone-900">
      <h1 className="text-7xl dark:text-white md:text-9xl">
        {'Welcome.'.split('').map((x) => (
          <span className="duration-75 hover:pr-2 hover:text-pink-500">
            {x}
          </span>
        ))}
      </h1>
      <hr className="bg-stone-200 dark:bg-stone-800" />
      <article>
        <p className="text-xl dark:text-white">
          <em className="font-semibold not-italic">I'm Matthew</em>. I'm a
          full-stack web developer. I work with a variety of technologies. My
          favorite language is <Underline>TypeScript</Underline>. On the front
          end, I enjoy using JavaScript frameworks like{' '}
          <Underline>React</Underline>. I also enjoy the classic combo of{' '}
          <Underline>HTML</Underline>, <Underline>CSS</Underline>, and{' '}
          <Underline>JavaScript</Underline>. On the back end, I like to use more
          JavaScript tools like <Underline>node.js</Underline> and{' '}
          <Underline>express.js</Underline>. I also enjoy using platforms like{' '}
          <Underline>Firebase</Underline>.
        </p>
      </article>
    </section>
  );
}
