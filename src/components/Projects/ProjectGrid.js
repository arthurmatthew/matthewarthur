function ProjectGrid(props) {
    return (
        <div className="min-h-full w-full grid xl:grid-cols-3 xl:grid-rows-3 md:grid-rows-4 md:grid-cols-2 grid-rows-9 grid-cols-1 gap-1 md:pl-5 md:pr-5">
            {props.children}
        </div>
    );
}

export default ProjectGrid;