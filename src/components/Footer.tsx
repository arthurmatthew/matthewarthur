interface Children {
  children?: React.ReactNode;
}

export function Footer(props: Children) {
  return (
    <div className="flex w-full items-center justify-center p-4 duration-150">
      {props.children}
    </div>
  );
}
