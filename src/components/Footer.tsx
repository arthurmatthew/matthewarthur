import './Footer.css';

export default function Footer() {
  return (
    <footer className="border-stone-200 text-xs dark:border-stone-800 dark:bg-stone-900 sm:text-sm lg:text-lg">
      <p className="bg-yellow-200 dark:bg-yellow-700 dark:text-white">
        This website is under construction.
      </p>
      <p className="dark:text-white">
        Made with <i className="bi bi-heart-fill text-pink-500"></i> by Matthew
        Arthur. See the code{' '}
        <a
          target="_blank"
          href="https://www.github.com/arthurmatthew"
          className="underline"
        >
          here
        </a>
      </p>
    </footer>
  );
}
