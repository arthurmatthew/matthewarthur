function Footer(props) {
    return (
        <div className="dark:bg-stone-800 bg-stone-100 w-full p-10 flex items-center justify-center pt-0 duration-150">
            <p className="dark:text-stone-200 text-stone-600 text-xs text-center">
                {props.children}
            </p>
        </div>
    );
}

export default Footer;
