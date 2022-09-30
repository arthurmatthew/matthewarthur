import React from "react";

export function BoldHeading(props) {
    return (
        <i className="font-black not-italic text-purple-500 whitespace-nowrap">
            {props.children}
        </i>
    );
}
