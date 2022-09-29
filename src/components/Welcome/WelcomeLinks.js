import WelcomeLink from './WelcomeLink';
import WelcomeLinkIcon from './WelcomeLinkIcon';

function WelcomeLinks(props) {
    return (
        <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center w-full gap-5">
            <div className="flex gap-2">
                <WelcomeLink text="About Me" href='#about'/>
                <WelcomeLink text="My Projects" href='#projects'/>
            </div>
            <div className="flex flex-row justify-start items-center gap-4">
                <WelcomeLinkIcon icon="bi-envelope-fill" link="#contact" newTab={false}/>
                <WelcomeLinkIcon icon="bi-github" link="https://github.com/nootjack"/>
                <WelcomeLinkIcon icon="bi-stack-overflow" link="https://stackoverflow.com/users/16889019/matthew"/>
                <WelcomeLinkIcon icon="bi-discord"/>
            </div>
        </div>
    );
}

export default WelcomeLinks;