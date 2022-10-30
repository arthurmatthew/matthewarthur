import React, { useState } from "react";
import Toggle from "./components/Toggle";
import { Footer } from "./components/Footer.js";
import { FooterText } from "./components/FooterText";
import { motion } from "framer-motion";
import { UnderConstruction } from "./components/UnderConstruction";
import { Emphasize } from "./components/Emphasize";
import { Body } from "./components/Body";
import { Section } from "./components/Section";
import { HeroContainer } from "./components/HeroContainer";
import { TitleContainer } from "./components/TitleContainer";
import { Heading } from "./components/Heading";
import { BoldHeading } from "./components/BoldHeading";
import { Subtitle } from "./components/Subtitle";
import { ButtonContainer } from "./components/ButtonContainer";
import { Button } from "./components/Button";
import { DividerLine } from "./components/DividerLine";
import { Paragraph } from "./components/Paragraph";
import { Item } from "./components/Item";
import { List } from "./components/List";

// import { ReactComponent as TriangleDivider } from "./assets/triangle-divider.svg";

function App() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    if (dark) {
      setDark(false);
    } else {
      setDark(true);
    }
  };

  const splitToLetters = (name: String) => {
    return name.split("").map((letter, i) => (
      <motion.span
        className="inline-block transform duration-75 hover:brightness-125"
        transition={{
          duration: 0.1,
          type: "spring",
          stiffness: 400,
          damping: 10,
        }}
        whileHover={{ scale: 1.2 }}
        key={letter + i}
      >
        {letter}
      </motion.span>
    ));
  };

  return (
    <div className={dark ? "dark" : ""}>
      <Toggle toggle={toggleTheme} dark={dark} />
      <Body>
        <Section full={true}>
          {/* <SvgContainer>
                        <TriangleDivider className="relative block triangle-div-width h-[78px] dark:fill-stone-800 fill-stone-100 duration-150" />
                    </SvgContainer> */}
          <HeroContainer>
            <DividerLine />
            <TitleContainer>
              <Heading>
                Hi, I'm <BoldHeading>{splitToLetters("Matthew")}</BoldHeading>
              </Heading>
              <Subtitle>a full stack web developer.</Subtitle>
            </TitleContainer>
            <DividerLine />
            <ButtonContainer>
              <Button>About</Button>
              <Button>My Projects</Button>
            </ButtonContainer>
          </HeroContainer>
        </Section>
        <Section full={false}>
          <div className="flex flex-col gap-2">
            <Heading>About Me</Heading>
            <DividerLine />
            <Paragraph>
              Hey, I'm Matthew. I'm a full-stack web developer from the United
              States.
            </Paragraph>
            <Paragraph>
              I love technology. Mostly, I'm fascinated with websites. Every
              time I see a cool animation or design on a website, or an
              interesting back-end behavior, I have an unbeatable urge to open
              the developer console. I strive to create the best designs and
              experiences I can, taking in everything I see around the web.
            </Paragraph>
          </div>
        </Section>
        <Section full={false}>
          <div className="pt-12">&nbsp;</div>
          <div className="flex flex-col gap-2">
            <Heading>My Technologies</Heading>
            <DividerLine />
            <Paragraph>
              Here are some of the technologies & programming languages I work
              with.
            </Paragraph>
            <List name="Front-End">
              <Item>HTML</Item>
              <Item>CSS</Item>
              <Item>JavaScript</Item>
              <Item>React</Item>
              <Item>TailwindCSS</Item>
            </List>
            <div>
              <h2 className="text-xl font-black tracking-tighter text-black dark:text-white">
                Back-End
              </h2>
              <ul className="max-w-3xl text-2xl font-extralight tracking-tighter text-black dark:text-white">
                <li className="list-inside list-disc">Node.js</li>
                <li className="list-inside list-disc">Express.js</li>
                <li className="list-inside list-disc">MongoDB</li>
                <li className="list-inside list-disc">Firebase</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-black tracking-tighter text-black dark:text-white">
                Tools
              </h2>
              <ul className="max-w-3xl text-2xl font-extralight tracking-tighter text-black dark:text-white">
                <li className="list-inside list-disc">Visual Studio Code</li>
                <li className="list-inside list-disc">Git</li>
                <li className="list-inside list-disc">Stack Overflow</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-black tracking-tighter text-black dark:text-white">
                Other
              </h2>
              <ul className="max-w-3xl text-2xl font-extralight tracking-tighter text-black opacity-20 dark:text-white">
                <li className="list-inside list-disc">C#</li>
                <li className="list-inside list-disc">VB.NET</li>
                <li className="list-inside list-disc">Python</li>
                <li className="list-inside list-disc">Java</li>
                <li className="list-inside list-disc">Lua</li>
                <li className="list-inside list-disc">Unity Game Engine</li>
              </ul>
            </div>
          </div>
        </Section>
        <UnderConstruction />
        <Footer>
          <FooterText>
            Website build with React and TailwindCSS by Matthew Arthur.
            <br />
            <a
              href="https://www.github.com/arthurmatthew/matthewarthur"
              target="blank"
            >
              View the GitHub repository <Emphasize>here</Emphasize>.
            </a>
          </FooterText>
        </Footer>
      </Body>
    </div>
  );
}

export default App;
