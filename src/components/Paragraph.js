import React from 'react';

export function Paragraph(props) {
  return (
    <p className="max-w-3xl text-2xl font-extralight tracking-tighter text-black dark:text-white">
      {props.children}
    </p>
  );
}
