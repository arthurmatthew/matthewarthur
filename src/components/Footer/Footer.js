export default function Footer(props) {
    return (
        <div className="dark:bg-stone-800 bg-stone-100 w-full flex items-center justify-center duration-150">
            {props.children}
        </div>
    );
}
