import React, { useState } from "react";
import Welcome from "./components/Welcome/Welcome";
import Toggle from "./components/Toggle/Toggle";
import About from "./components/About/About";
import ImportantProjects from "./components/Projects/ImportantProjects/ImportantProjects";
import Footer from "./components/Footer/Footer";
// import Contact from './components/Contact/Contact';

const styles = {
    vpsize: {
        width: "100vw",
        height: "100vh",
    },
};

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
            style={styles.vpsize}
            className={`${dark ? "dark" : ""} overflow-x-hidden scroll-smooth`}
        >
            <Toggle toggle={toggleTheme} dark={dark} />
            <Welcome />
            <About dark={dark} />
            <ImportantProjects />
            {/* <Contact/> */}
            <Footer>
                Made by Matthew Arthur using React and TailwindCSS
                <br />
                I will update the site with new styles and sections as I learn
                new things!
                <br />
            </Footer>
        </div>
    );
}

export default App;
