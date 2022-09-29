import ImportantProject from "./ImportantProject";
import ImportantProjectsContainer from "./ImportantProjectsContainer";
import ThumbnailTest from '../img/Thumbnail.png';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt elit eget turpis dapibus cursus. Cras odio sem, volutpat vel suscipit vitae, tristique vel tellus. Proin sed ante a ante mollis convallis. Maecenas eget sollicitudin erat, a ultricies ligula. Curabitur eu fringilla lacus. Cras tortor sem, tempus vel pretium et, sagittis et mi. Proin mollis rutrum lacus eget congue. Morbi faucibus auctor malesuada. Quisque sit amet nisl at arcu tincidunt elementum. Sed eu arcu elit. Nullam in velit gravida nulla feugiat vulputate sed malesuada leo. Etiam quis finibus enim. Sed congue finibus augue et imperdiet.';
const featured = {
    1: {
        title: 'Placeholder',
        img: ThumbnailTest,
        text: lorem,
    },
    2: {
        title: 'Placeholder 2',
        img: ThumbnailTest,
        text: lorem,
    },
    3: {
        title: 'Placeholder, Again',
        img: ThumbnailTest,
        text: lorem,
    },
}

function ImportantProjects() {
    return (
        <div className="dark:bg-stone-800 bg-stone-100 w-full h-min 2xl:pl-60 2xl:pr-60 pt-10 duration-150" id='projects'>
            <ImportantProjectsContainer>
                <ImportantProject title={featured[1].title} text={featured[1].text} img={featured[1].img}/>
                <ImportantProject title={featured[2].title} text={featured[2].text} img={featured[2].img}/>
                <ImportantProject title={featured[3].title} text={featured[3].text} img={featured[3].img}/>
            </ImportantProjectsContainer>
        </div>
    );
}

export default ImportantProjects;