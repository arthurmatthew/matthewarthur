interface Children {
  children?: React.ReactNode;
}

export function Emphasize(props: Children) {
  return (
    <i className="not-italic text-slate-300 underline">{props.children}</i>
  );
}
