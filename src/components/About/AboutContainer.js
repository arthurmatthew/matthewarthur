function AboutContainer(props) {
    return (
        <div className="dark:bg-stone-800 bg-stone-100 items-center flex-col min-h-full duration-150">
            {props.children}
        </div>
    );
}

export default AboutContainer;
