function ContactForm() {
    return (
        <div className="w-full">
            <form name="contact" method="POST" className="flex-col h-min" netlify>
                <input type="hidden" name="form-name" value="contact"/>
                <div className="flex md:flex-row flex-col gap-1 justify-center">
                    <div className="md:w-[50%] w-full">
                        <div className="h-[93px] p-1 pb-0">
                            <input required placeholder="Enter your name..." type="text" name="name" className="outline-none h-full w-full bg-transparent border-solid border-b-[1px] focus:border-b-4 dark:border-stone-700 dark:focus:border-stone-300 border-stone-200 focus:border-stone-200 pl-5 dark:text-white text-black duration-200 invalid:border-b-red-500 focus:invalid:border-b-red-500"/>
                        </div>
                        <div className="h-[93px] p-1 pb-0">
                            <input required placeholder="Enter your email..." type="email" name="email" className="outline-none h-full w-full bg-transparent border-solid border-b-[1px] focus:border-b-4 dark:border-stone-700 dark:focus:border-stone-300 border-stone-200 focus:border-stone-200 pl-5 dark:text-white text-black duration-200 invalid:border-b-red-500 focus:invalid:border-b-red-500"/>
                        </div>
                    </div>
                    <div className="md:w-[50%] w-full">
                        <div className="h-[188px] pr-1 md:pl-0 pl-1">
                            <textarea required placeholder="Make a suggestion, report a bug, or say something nice!" name="message" className="relative outline-none h-full w-full bg-transparent border-solid border-[1px] focus:border-4 dark:border-stone-700 dark:focus:border-stone-300 border-stone-200 focus:border-stone-200 md:rounded-tr-lg p-5 dark:text-white text-black duration-200 resize-none no-scrollbar"></textarea>
                        </div>
                    </div>
                </div>
                <div className="h-16 p-1">
                    <button type="submit" className="w-full h-full dark:border-stone-700 dark:focus:border-stone-300 border-stone-200 focus:border-stone-200 border-[1px] border-solid rounded-br-lg rounded-bl-lg dark:text-white text-black duration-200">Send</button>
                </div>
            </form>
        </div>
    );
}

/*
<div className="h-16 p-1">
    <input placeholder="Enter a subject..." type="text" name="subject" className="outline-none h-full w-full bg-transparent border-solid border-b-[1px] focus:border-b-4 dark:border-stone-700 dark:focus:border-stone-300 border-stone-200 focus:border-stone-200 pl-5 dark:text-white text-black duration-200"/>
</div>
*/

export default ContactForm;