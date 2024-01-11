import ContactForm from "../Contact/ContactForm"
import Socials from "../Contact/socials"

export default function Contact () {
 return (
    <div
      id="Contact"
      className="flex flex-row flex-wrap items-center w-full justify-center min-h-screen bg-white text-black py-3"
    >
        <div className="w-1/2 flex min-h-screen items-center justify-center">
        <Socials/>
        </div>
        <div className="w-1/2 ">
        <ContactForm/>
        </div>
        


    </div>
 )
}