import { motion } from "framer-motion";

function WelcomeLinkIcon(props) {
    return (
        <a
            href={props.link}
            target={props.newTab ? "_blank" : ""}
            rel="noreferrer"
        >
            <motion.i
                className={`${props.icon} dark:text-pink-400 text-black text-2xl flex justify-center items-center duration-200 dark:hover:text-white hover:text-blue-400`}
                whileTap={{ scale: 0.9 }}
            ></motion.i>
        </a>
    );
}

export default WelcomeLinkIcon;
