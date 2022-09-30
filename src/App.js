import React, { useState } from "react";
import Toggle from "./components/Toggle/Toggle";
import Footer from "./components/Footer/Footer.js";
import FooterText from "./components/Footer/FooterText";
// import Contact from './components/Contact/Contact';
import WelcomeContainer from "./components/Welcome/WelcomeContainer";
import WelcomeTitle from "./components/Welcome/WelcomeTitle";
import WelcomeSubtitle from "./components/Welcome/WelcomeSubtitle";
import WelcomeLinks from "./components/Welcome/WelcomeLinks";
import { ReactComponent as TriangleDivider } from "./img/triangle-divider.svg";
import WelcomeLink from "./components/Welcome/WelcomeLink";
import WelcomeLinkIcon from "./components/Welcome/WelcomeLinkIcon";

function App() {
    const [dark, setDark] = useState(true);

    function toggleTheme() {
        if (dark) {
            setDark(false);
        } else {
            setDark(true);
        }
    }

    return (
        <div
            className={`${dark ? "dark" : ""} overflow-x-hidden scroll-smooth w-screen h-screen dark:bg-stone-800 bg-stone-100`}
        >
            <Toggle toggle={toggleTheme} dark={dark} />
            <WelcomeContainer>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <TriangleDivider className="relative block triangle-div-width h-[78px] dark:fill-stone-800 fill-stone-100 duration-150" />
                </div>
                <div className="flex justify-center min-w-fit h-96 flex-col gap-3 p-10">
                    <WelcomeTitle>
                        Hi, I'm&nbsp;
                        <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-500 dark:from-pink-400 dark:to-pink-600 not-italic">
                            Matthew
                        </i>
                    </WelcomeTitle>
                    <WelcomeSubtitle>
                        I'm a web developer. I know front-end development,
                        including React. I'm learning the back-end. My goal is
                        to be a full-stack web developer.
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
            <Footer>
                <FooterText>
                    Website build with React and TailwindCSS by Matthew Arthur.<br/>
                    <a href="https://www.github.com/arthurmatthew/matthewarthur" target="blank">View the GitHub repository <i className="not-italic text-slate-300 underline">here</i>.</a>
                </FooterText>
            </Footer>
        </div>
    );
}

export default App;
