import React from 'react';

export function LandingContainer(props) {
  return (
    <div className="flex h-full flex-col justify-center gap-6">
      {props.children}
    </div>
  );
}
