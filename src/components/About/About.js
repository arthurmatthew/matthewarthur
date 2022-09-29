import React from "react";
import AboutContainer from "./AboutContainer";
import AboutContent from "./AboutContent";
import { ReactComponent as AboutImageDark } from "../../img/undraw_responsive_dark.svg";
import { ReactComponent as AboutImageLight } from "../../img/undraw_responsive_light.svg";
import AboutTitle from "./AboutTitle";
import AboutText from "./AboutText";
import Accent from "./Accent";

function About(props) {
    return (
        <div className="dark:bg-stone-800 bg-stone-100 w-full h-min 2xl:pl-60 2xl:pr-60 pt-10 pb-0 duration-150" id='about'>
            <AboutContainer>
                <AboutTitle>About Me</AboutTitle>
                <div className="flex 2xl:flex-row 2xl:justify-between items-center flex-col min-h-full duration-150">
                    <AboutContent>
                        <AboutText caption='Who I am'>I'm Matthew, located in Washington. I have a passion for technology, 
                        <Accent> specifically web development</Accent>. I like to design <Accent>front-ends</Accent> and build <Accent>back-ends</Accent> for web apps. 
                        I study computer science problems online with LeetCode. I've played around with many other languages 
                        and topics besides web development.</AboutText>

                        <AboutText caption='My technical skills'>I'm <Accent>primarily a web developer</Accent>. While I enjoy to try new
                        technologies, I am focused on the <Accent>MERN tech stack</Accent>. I am confident in creating front-ends using <Accent>ReactJS</Accent>, however
                        I am still getting comfortable with the back-end. I can build sites using <Accent>plain HTML and CSS</Accent>. I can use libraries
                        such as <Accent>TailwindCSS</Accent> to speed up the (rather annoying) process of CSS.
                        </AboutText>
                    </AboutContent>
                    <AboutContent image={true}>
                        {props.dark ? <AboutImageDark className="w-[80%]"/> : <AboutImageLight className="w-[80%]"/>}
                    </AboutContent>
                </div>
            </AboutContainer>
        </div>
    );
}

export default About;