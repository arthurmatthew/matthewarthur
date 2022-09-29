function WelcomeContainer(props) {
    return (
        <div className="w-full h-full flex justify-center 2xl:justify-start items-center 2xl:pl-60 dark:bg-stone-900 bg-stone-200 duration-500 relative">
            {props.children}
        </div>
    );
}

export default WelcomeContainer;
