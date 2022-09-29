function WelcomeLinks(props) {
    return (
        <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center w-full gap-5">
            {props.children}
        </div>
    );
}

export default WelcomeLinks;
