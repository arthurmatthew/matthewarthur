function Accent(props) {
    return (
        <i className="not-italic font-extrabold dark:text-pink-500 text-blue-500">{props.children}</i>
    );
}

export default Accent;