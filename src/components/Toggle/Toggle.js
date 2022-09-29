import { motion } from 'framer-motion'; 

function Toggle(props) {
    return (
      <motion.div className="p-3 fixed z-50" onClick={props.toggle} whileTap={{scale: 0.9}} whileHover={{scale: 1.1}}>
            <div className="dark:bg-stone-200 bg-stone-900 w-8 h-8 rounded-2xl flex justify-center items-center duration-500">
                <i className={`${props.dark ? 'bi-sun text-xl' : 'bi-moon-stars text-lg'} ${props.icon} text-white dark:text-black flex justify-center items-center`}></i>
            </div>
      </motion.div>
    );
}

export default Toggle;