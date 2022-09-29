function Project(props) {

    function listMadeWith() {
        let result = 'Made with ';
        for (let i = 0; i < props.madeWith.length; i++) {
            result += props.madeWith[i] + ', ';
        }
        return result.slice(0, -2);
    }

    return (
        <div className="w-full h-96 relative shadow-sm rounded-md overflow-hidden hover:scale-110 duration-200 ease-out group hover:z-20">
            <div className='w-full h-full absolute top-0 left-0 z-0'>
                <div className='w-full h-full absolute top-0 left-0 backdrop-blur-sm backdrop-grayscale group-hover:backdrop-grayscale-0 duration-200 ease-out'></div>
                <img src={props.img} className='w-full h-full z-0' alt='Project Thumbnail'/>
            </div>
            <div className='w-full h-full absolute top-0 left-0 z-10 p-5 flex flex-col justify-center group-hover:justify-start duration-150 group-hover:overflow-y-scroll no-scrollbar'>
                <h1 className='font-extrabold text-4xl group-hover:text-3xl text-white duration-150 w-full'>{props.title}</h1>
                <p className='md:text-lg text-lg text-white h-0 overflow-hidden group-hover:overflow-visible break-all group-hover:h-min duration-75'>{props.description}</p>
                <p className='text-xs text-white h-0 overflow-hidden group-hover:overflow-visible break-all group-hover:h-min duration-75 pt-1'>{listMadeWith()}</p>
            </div>
        </div>
    );
}

export default Project;