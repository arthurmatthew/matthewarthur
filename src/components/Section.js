import React from 'react';

export function Section(props) {
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
