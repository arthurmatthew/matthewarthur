import { motion } from 'framer-motion';

interface Children {
  children?: React.ReactNode;
}

export function Button(props: Children) {
  return (
    <motion.button
      className="w-40 rounded-sm bg-white p-2 duration-75 hover:bg-purple-500 hover:text-white"
      whileTap={{
        scale: 0.9
      }}
    >
      {props.children}
    </motion.button>
  );
}
