function WelcomeTitle(props) {
    return (
        <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-extrabold tracking-tight text-stone-800 dark:text-white duration-300">
            {props.children}
        </h1>
    );
}

export default WelcomeTitle;
