function ImportantProject(props) {
        return (
        <div className="w-full min-h-[384px] md:h-96  flex md:flex-row flex-col relative duration-100 group">
            <div className="w-full absolute top-0 left-0 flex justify-center items-center translate-y-[-20px] z-50">
                <div className="dark:bg-pink-400 bg-blue-300 w-[50%] h-16 rounded-md shadow-lg z-50 flex justify-center items-center duration-200 pl-1 pr-1 sm:p-0">
                    <h1 className="lg:text-xl 2xl:text-4xl text-lg text-center">{props.title}</h1>
                </div>
            </div>
            <div className="md:p-5 md:pr-0 rounded-lg md:overflow-hidden md:w-[50%] w-full z-10 relative">
                <img src={props.img} className='rounded-xl md:rounded-tr-none md:rounded-bl-xl md:rounded-br-none rounded-bl-none rounded-br-none brightness-90 h-full z-10 grayscale group-hover:grayscale-0 duration-75 md:min-w-fit w-full' alt='Featured Project Thumbnail'/>
                <div className="md:p-5 md:pr-0 h-full w-full z-20 absolute top-0 left-0 overflow-hidden">
                    <div className="bg-blue-300 dark:bg-pink-300 w-full h-full rounded-xl md:rounded-br-none md:rounded-bl-xl md:rounded-tr-none rounded-bl-none rounded-br-none opacity-70 group-hover:opacity-0 duration-75"></div>
                </div>
            </div>
            <div className="h-96 md:w-[50%] w-full md:p-5 md:pl-0">
                <div className="bg-white w-full h-full rounded-xl sm:p-10 p-3 md:rounded-tl-none md:rounded-tr-xl md:rounded-bl-none rounded-tr-none rounded-tl-none overflow-y-hidden no-scrollbar relative group">
                    <div className="w-full h-full overflow-scroll no-scrollbar">
                        <p className="text-xl duration-100">{props.text}</p>
                    </div>
                    <div className="w-full h-20 absolute sm:bottom-10 bottom-3 bg-gradient-to-t ark:from-stone-300 from-white group-hover:h-0 duration-100"></div>
                </div>
            </div>
        </div>
    );
}

export default ImportantProject;