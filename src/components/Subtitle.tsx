interface Children {
  children?: React.ReactNode;
}

export function Subtitle(props: Children) {
  return (
    <p className="text-2xl font-extralight tracking-tight text-black duration-100 dark:text-white">
      {props.children}
    </p>
  );
}
