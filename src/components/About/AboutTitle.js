function AboutTitle(props) {
    return (
        <div className="p-10 pt-0 2xl:pb-5 w-full flex items-center justify-center">
            <h1 className="text-6xl font-extrabold dark:text-stone-200 text-stone-800 duration-300">{props.children}</h1>
        </div>
    );
}

export default AboutTitle;