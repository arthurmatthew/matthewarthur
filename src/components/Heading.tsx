interface Children {
  children?: React.ReactNode;
}

export function Heading(props: Children) {
  return (
    <h1 className="flex flex-col text-xl font-semibold tracking-tight text-black duration-150 dark:text-white 2xl:text-3xl">
      {props.children}
    </h1>
  );
}
