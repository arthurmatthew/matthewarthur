import { Item } from "./Item";

interface ListProps {
  name: String;
  children?: React.ReactNode;
}

export function List(props: ListProps) {
  return (
    <div>
      <h2 className="text-xl font-black tracking-tighter text-black dark:text-white">
        {props.name}
      </h2>
      <ul className="max-w-3xl text-2xl font-extralight tracking-tighter text-black dark:text-white">
        {props.children}
      </ul>
    </div>
  );
}
