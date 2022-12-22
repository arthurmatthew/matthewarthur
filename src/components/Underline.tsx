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
    <em className="ul">
      <a href={href}>{children}</a>
    </em>
  );
}
