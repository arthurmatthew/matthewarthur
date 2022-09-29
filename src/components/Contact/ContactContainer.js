function ContactContainer(props) {
    return (
        <div className="dark:bg-stone-800 bg-stone-100 flex flex-col items-center min-h-full sm:pl-20 sm:pr-20 pl-10 pr-10 duration-150">
            <h1 className="dark:text-stone-400 text-stone-800 font-extrabold text-4xl p-10 md:pt-5 pt-10 duration-200 text-center">
                Contact Me
            </h1>
            {props.children}
        </div>
    );
}

export default ContactContainer;
