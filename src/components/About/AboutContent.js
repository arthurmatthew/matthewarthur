function AboutContent(props) {
    return (
        <div 
        className={`${props.image ? 'min-h-min sm:pb-12 sm:pt-12 pb-1 pt-1' : 'h-full md:pl-24 md:pr-24 '} 2xl:w-[50%] flex flex-col items-center justify-center`}>
            {props.children}
        </div>
    );
}

export default AboutContent;