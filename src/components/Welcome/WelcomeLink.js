import { motion } from "framer-motion";

function WelcomeLink(props) {

    return (
        <motion.a className="bg-white dark:hover:text-white hover:text-white dark:text-black p-2 md:w-44 flex items-center justify-center rounded-md hover:bg-gradient-to-br from-blue-300 to-blue-500 dark:from-pink-400 dark:to-red-600 duration-300 w-32 dark:shadow-none shadow-black shadow" 
        whileTap={{scale: 0.9}}
        href={props.href}
        >
            {props.text}
        </motion.a>
    );
}

export default WelcomeLink;