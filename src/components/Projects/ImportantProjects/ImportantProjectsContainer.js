function ImportantProjectsContainer(props) {
    return (
        <div className="dark:bg-stone-800 bg-stone-100 flex flex-col gap-10 items-center min-h-full sm:pl-20 sm:pr-20 pl-10 pr-10 duration-150">
            <h1 className="dark:text-white text-stone-800 font-extrabold text-4xl sm:text-5xl p-10 pt-0 md:pb-10 pb-0 text-center md:text-6xl duration-200">
                Featured Projects
            </h1>
            {props.children}
        </div>
    );
}

export default ImportantProjectsContainer;
