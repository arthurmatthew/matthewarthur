import React from 'react';

export function Section(props) {
  return (
    <div className="justify-evely relative flex h-screen w-full">
      {props.children}
    </div>
  );
}
