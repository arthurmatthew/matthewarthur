export default function Header() {
  return (
    <header className="fixed top-0 left-0 flex h-24 w-screen flex-row items-center justify-center gap-4 border-b-2 border-stone-200 py-4 pl-24  dark:border-stone-800">
      <nav className="flex w-full justify-between px-8">
        <h1 className="serif text-2xl font-normal italic dark:text-white">
          Matthew Arthur
        </h1>
        <ul className="flex items-center justify-between gap-4 text-2xl italic dark:text-white">
          <li className="serif text-xl">
            <a>Item</a>
          </li>
          <li className="serif text-xl">
            <a>Item</a>
          </li>
          <li className="serif text-xl">
            <a>Item</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
