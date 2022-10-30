import { motion } from "framer-motion";

interface ToggleProps {
  toggle: Function;
  dark: Boolean;
  children?: React.ReactNode;
}

function Toggle(props: ToggleProps) {
  return (
    <motion.div
      className="fixed z-50 p-3"
      onClick={props.toggle}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-stone-900 duration-500 dark:bg-stone-200">
        <i
          className={`${
            props.dark ? "bi-sun text-xl" : "bi-moon-stars text-lg"
          }  flex items-center justify-center text-white dark:text-black`}
        ></i>
      </div>
    </motion.div>
  );
}

export default Toggle;
