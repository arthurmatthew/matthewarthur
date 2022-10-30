interface Children {
  children?: React.ReactNode;
}

function SvgContainer(props: Children) {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
      {props.children}
    </div>
  );
}
