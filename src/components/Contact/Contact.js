import ContactContainer from "./ContactContainer";
import ContactForm from "./ContactForm";

function Contact() {
    return (
        <div
            className="dark:bg-stone-800 bg-stone-100 w-full min-h-min 2xl:pl-60 2xl:pr-60 pt-0 pb-10 duration-150"
            id="contact"
        >
            <ContactContainer>
                <ContactForm />
            </ContactContainer>
        </div>
    );
}

export default Contact;
