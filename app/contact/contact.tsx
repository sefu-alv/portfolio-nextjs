import ContactForm from "../../components/Contact/ContactForm"
import Socials from "../../components/Contact/socials"

export default function Contact () {
  return (
     <div
       id="Contact"
       className="flex flex-col lg:flex-row items-center w-full justify-center min-h-screen bg-white text-black py-3"
     >
         <div className="w-full lg:w-1/2 flex flex-wrap lg:min-h-screen items-center justify-center">
         <Socials/>
         </div>
         <div className="w-full flex justify-center sm:w-1/2 ">
         <ContactForm/>
         </div>
     </div>
  )
 }