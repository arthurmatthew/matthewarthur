import Project from "./Project";
import ProjectGrid from "./ProjectGrid";
import ProjectsContainer from "./ProjectsContainer";
import ThumbnailTest from './img/Thumbnail.png';
import Placeholder from "./Placeholder";

// Grid has room for 9 projects 

const projects = [
    { title: 'Lorem Ipsum', img: ThumbnailTest, madeWith: ['React', 'CSS'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { blank: true },
    { blank: true },
    { blank: true },
    { blank: true },
    { blank: true },
    { blank: true },
    { blank: true },
    { blank: true },
]

function Projects() {
    return (
        <div className="dark:bg-stone-800 bg-stone-100 w-full min-h-full 2xl:pl-60 2xl:pr-60 pt-0 pb-10 duration-150" id='about'>
            <ProjectsContainer>
                <ProjectGrid>
                    {projects.map(project => {
                        if (project.blank) {
                            return (
                                <Placeholder/>
                            )
                        }
                        return (
                            <Project img={project.img} title={project.title} description={project.description} madeWith={project.madeWith}/>
                        )
                    })}
                </ProjectGrid>
            </ProjectsContainer>
        </div>
    );
}

export default Projects;