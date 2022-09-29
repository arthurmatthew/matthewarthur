function ProjectsContainer(props) {
    return (
        <div className="dark:bg-stone-800 bg-stone-100 flex flex-col items-center min-h-full sm:pl-20 sm:pr-20 pl-10 pr-10 duration-150">
            <h1 className="dark:text-white text-stone-800 text-4xl p-10 md:pt-5 pt-10 duration-200 text-center">All Projects</h1>
            {props.children}
        </div>
    );
}

export default ProjectsContainer;