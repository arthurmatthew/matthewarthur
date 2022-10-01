import React from 'react';

export function BoldHeading(props) {
    return (
        <i className="whitespace-nowrap text-3xl font-black not-italic text-purple-500 sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl">
            {props.children}
        </i>
    );
}
