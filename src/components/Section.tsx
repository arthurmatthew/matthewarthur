interface SectionProps {
  full: Boolean;
  children?: React.ReactNode;
}

export function Section(props: SectionProps) {
  return (
    <div
      className={`relative flex flex-col ${
        props.full ? 'h-screen' : ''
      } w-full`}
    >
      {props.children}
    </div>
  );
}
