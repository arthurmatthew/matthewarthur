interface Children {
  children?: React.ReactNode;
}

export function TitleContainer(props: Children) {
  return <div className="flex flex-col gap-2">{props.children}</div>;
}
