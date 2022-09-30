import React from "react";

export function UnderConstruction() {
    return (
        <div className="flex w-full items-center justify-center p-12">
            <div className="rounded-md bg-white p-6">
                This website is under construction. See its progress{" "}
                <a
                    href="https://www.github.com/arthurmatthew/matthewarthur"
                    target="blank"
                    className="text-purple-500"
                >
                    here
                </a>
                .
            </div>
        </div>
    );
}
