interface Children {
  children?: React.ReactNode;
}

export function Paragraph(props: Children) {
  return (
    <p className="max-w-3xl text-2xl font-extralight tracking-tighter text-black dark:text-white">
      {props.children}
    </p>
  );
}
