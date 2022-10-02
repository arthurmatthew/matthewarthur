import React from 'react';

export function Subtitle(props) {
  return (
    <p className="text-2xl font-extralight tracking-tight text-black duration-100 dark:text-white">
      {props.children}
    </p>
  );
}
