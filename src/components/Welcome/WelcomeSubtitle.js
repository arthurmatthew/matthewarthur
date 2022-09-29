function WelcomeSubtitle(props) {
    return (
        <p className="tracking-tight text-black dark:text-white 2xl:text-lg paragraph-1">
            {props.children}
        </p>
    );
}

export default WelcomeSubtitle;
