interface Children {
  children?: React.ReactNode;
}

export function FooterText(props: Children) {
  return (
    <p className="text-center text-xs text-stone-600 dark:text-stone-200">
      {props.children}
    </p>
  );
}
