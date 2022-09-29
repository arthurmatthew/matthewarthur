import React from "react";
import WelcomeContainer from "./WelcomeContainer";

import WelcomeTitle from "./WelcomeTitle";
import WelcomeSubtitle from "./WelcomeSubtitle";
import WelcomeLinks from "./WelcomeLinks";
import { ReactComponent as TriangleDivider } from "../../img/triangle-divider.svg";
import WelcomeLink from "./WelcomeLink";
import WelcomeLinkIcon from "./WelcomeLinkIcon";

function Welcome(props) {
    return (
        <WelcomeContainer>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <TriangleDivider className="relative block triangle-div-width h-[78px] dark:fill-stone-800 fill-stone-100 duration-150" />
            </div>
            <div className="flex justify-center min-w-fit h-96 flex-col gap-3 p-10">
                <WelcomeTitle>
                    Hi, I'm&nbsp;
                    <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-500 dark:from-pink-400 dark:to-pink-700 not-italic">
                        Matthew
                    </i>
                </WelcomeTitle>
                <WelcomeSubtitle>
                    I'm a web developer. I know front-end development, including
                    React. I'm learning the back-end. My goal is to be a
                    full-stack web developer.
                </WelcomeSubtitle>
                <WelcomeLinks>
                    <div className="flex gap-2">
                        <WelcomeLink text="About Me" href="#about" />
                        <WelcomeLink text="My Projects" href="#projects" />
                    </div>
                    <div className="flex flex-row justify-start items-center gap-4">
                        <WelcomeLinkIcon
                            icon="bi-github"
                            link="https://github.com/arthurmatthew"
                        />
                    </div>
                </WelcomeLinks>
            </div>
        </WelcomeContainer>
    );
}

export default Welcome;
