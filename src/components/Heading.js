import React from "react";

export function Heading(props) {
    return (
        <h1 className="2xl:text-9xl xl:text-8xl lg:text-6xl md:text-4xl text-3xl font-semibold tracking-tight text-black duration-150 dark:text-white">
            {props.children}
        </h1>
    );
}
