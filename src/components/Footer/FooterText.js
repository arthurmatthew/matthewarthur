export default function FooterText(props) {
    return (
        <p className="dark:text-stone-200 text-stone-600 text-xs text-center">
            {props.children}
        </p>
    );
}
