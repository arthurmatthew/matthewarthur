interface Children {
  children?: React.ReactNode;
}

export function Item(props: Children) {
  return <li className="list-inside list-disc">{props.children}</li>;
}
