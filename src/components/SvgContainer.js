import React from "react";

function SvgContainer(props) {
    return (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            {props.children}
        </div>
    );
}
