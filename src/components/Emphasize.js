import React from 'react';

export function Emphasize(props) {
  return (
    <i className="not-italic text-slate-300 underline">{props.children}</i>
  );
}
