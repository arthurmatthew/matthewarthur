import React, { useState } from "react";
import Toggle from "./components/Toggle";
import Footer from "./components/Footer.js";
import FooterText from "./components/FooterText";
import { motion } from "framer-motion";
import { UnderConstruction } from "./components/UnderConstruction";
import { Emphasize } from "./components/Emphasize";
import { Body } from "./components/Body";
import { Section } from "./components/Section";
import { LandingContainer } from "./components/LandingContainer";
import { TitleContainer } from "./components/TitleContainer";
import { Heading } from "./components/Heading";
import { BoldHeading } from "./components/BoldHeading";
import { Subtitle } from "./components/Subtitle";
import { ButtonContainer } from "./components/ButtonContainer";
import { Button } from "./components/Button";
import { DividerLine } from "./components/DividerLine";

// import Contact from './components/Contact/Contact';
// import { ReactComponent as TriangleDivider } from "./img/triangle-divider.svg";

function App() {
    const [dark, setDark] = useState(true);

    function toggleTheme() {
        if (dark) {
            setDark(false);
        } else {
            setDark(true);
        }
    }

    const splitToLetters = (name) => {
        return name.split("").map((letter) => (
            <motion.span
                className="inline-block transform duration-75 hover:brightness-125"
                transition={{
                    duration: 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                }}
                whileHover={{ scale: 1.2 }}
                key={letter + name.indexOf(letter)}
            >
                {letter}
            </motion.span>
        ));
    };

    return (
        <div className={dark ? "dark" : ""}>
            <Toggle toggle={toggleTheme} dark={dark} />
            <Body>
                <Section section="Landing">
                    {/* <SvgContainer>
                        <TriangleDivider className="relative block triangle-div-width h-[78px] dark:fill-stone-800 fill-stone-100 duration-150" />
                    </SvgContainer> */}
                    <LandingContainer>
                        <DividerLine />
                        <TitleContainer>
                            <Heading>
                                Hi, I'm{" "}
                                <BoldHeading>
                                    {splitToLetters("Matthew")}
                                </BoldHeading>
                            </Heading>
                            <Subtitle>a full stack web developer.</Subtitle>
                        </TitleContainer>
                        <DividerLine />
                        <ButtonContainer>
                            <Button>About</Button>
                            <Button>My Projects</Button>
                        </ButtonContainer>
                    </LandingContainer>
                </Section>
                <UnderConstruction />
                <Footer>
                    <FooterText>
                        Website build with React and TailwindCSS by Matthew
                        Arthur.
                        <br />
                        <a
                            href="https://www.github.com/arthurmatthew/matthewarthur"
                            target="blank"
                        >
                            View the GitHub repository{" "}
                            <Emphasize>here</Emphasize>.
                        </a>
                    </FooterText>
                </Footer>
            </Body>
        </div>
    );
}

export default App;
