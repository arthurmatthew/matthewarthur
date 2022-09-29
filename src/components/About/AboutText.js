function AboutText(props) {
    return (
        <div className="p-10 pt-5 flex items-start flex-col hover:translate-y-[-5px] duration-150 hover:brightness-110 hover:saturate-150">
            <h1 className={`list-item list-[square] md:text-3xl text-2xl dark:text-pink-400 text-blue-400 pb-2 ${props.delay1}`}>{props.caption}</h1>
            <p className={`md:text-xl text-lg dark:text-stone-200 duration-200 ${props.delay2}`}>{props.children}</p>
        </div>
    );
}

export default AboutText;