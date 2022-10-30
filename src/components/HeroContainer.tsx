interface Children {
  children?: React.ReactNode;
}

export function HeroContainer(props: Children) {
  return (
    <div className="flex h-full flex-col justify-center gap-6">
      {props.children}
    </div>
  );
}
