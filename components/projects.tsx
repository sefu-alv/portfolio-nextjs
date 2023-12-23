import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from 'next/image'

export default function Project() {
  // ...

  return (
    <div className='h-screen w-full justify-center flex items-center' >
        <Carousel className='h-[50vh] w-1/2' transitionTime={1000} showThumbs={false}>
      <div>
      <Image src="/place.png"
      alt="Project 1"
      width={500} height={300} />
          <h2 className="text-xl font-bold text-center">Weather App</h2>
        <p className="text-sm px-10">Card Description</p>
        
      </div>
      <div>
      <Image src="/place.png"
       alt="Project 2"
      width={500} height={300} />
      
        <h2 className="text-xl font-bold text-center">Another Project</h2>
        <p className="text-sm px-10">Card Description</p>
      </div>
      {/* Add more projects as needed */}
    </Carousel>
    </div>
    
  );
}