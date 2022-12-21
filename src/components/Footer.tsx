export default function Footer() {
  return (
    <footer className="flex h-24 w-screen flex-col items-center justify-center gap-1 border-t-2 border-stone-200 py-4 pl-24  dark:border-stone-800 dark:bg-stone-900">
      <p className="bg-yellow-200 dark:bg-yellow-700 dark:text-white">
        This website is under construction.
      </p>
      <p className="dark:text-white">
        This website was made with React and TailwindCSS by Matthew Arthur. See
        the code{' '}
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
