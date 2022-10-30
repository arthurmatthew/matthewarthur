interface Children {
  children?: React.ReactNode;
}

export function ButtonContainer(props: Children) {
  return <div className="flex gap-2">{props.children}</div>;
}
