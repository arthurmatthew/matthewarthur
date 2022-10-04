import React from 'react';

export function Body(props) {
  return (
    <div className="bg-grid h-screen w-screen overflow-x-hidden scroll-smooth bg-stone-200 pl-6 pr-6 duration-500 dark:bg-stone-900 md:pr-32 md:pl-32 xl:pl-64 xl:pr-64">
      {props.children}
    </div>
  );
}
