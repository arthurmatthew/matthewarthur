import { ReactNode } from 'react';
import './Underline.css';

export default function Underline({
  children,
  href
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <em className="ul shadow-[inset_0_-0.5em_0] shadow-pink-500/50 duration-75 hover:shadow-[inset_0_-1em_0] hover:shadow-pink-500/50">
      <a href={href}>{children}</a>
    </em>
  );
}
