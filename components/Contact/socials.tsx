import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

export default function Socials () {
    return (
        <div className="lg:min-h-screen flex flex-col justify-center items-center gap-16 my-[5rem] w-[80%] lg:w-[45%] overflow-hidden">
          <div>
            

          </div>
            <div className="w-full">
                    <h1 className="text-5xl font-extrabold">Let&apos;s Talk</h1>
                    <p className="mt-3">Got any ideas or brands you want developed? If so, I&apos;d love to hear about it! </p>
            </div>
           
            <div className="w-full text-4xl font-bold">
              <h2>Socials</h2>
              <div className="flex items-center  mt-10 mb-5 ">
            <div className="flex px-2 space-x-6 text-2xl lg:text-4xl">
              <a
                href="https://github.com/sefu-alv"
                className="text-black hover:scale-150 transition-transform duration-500"
              >
                <SiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sefufim-alvarez-a73799286/"
                className="text-black hover:scale-150 transition-transform duration-500"
              >
                <SiLinkedin />
              </a>
              <a
                href="https://www.instagram.com/sefufim?igsh=NWhpcTRkNXMxeGVp&utm_source=qr"
                className="text-black  hover:scale-150 transition-transform duration-500"
              >
                <SiInstagram />
              </a>
            </div>
          </div>
            </div>

        </div>
    )
}