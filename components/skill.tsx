import { skillsData } from '../lib/data'; // replace './data' with the actual path to your data.ts file

export default function Skills() {
  return (
    <div className='w-full h-screen px-8'>
        <div className='flex justify-start '>
            <p className='text-2xl xs:text-4xl lg:text-7xl font-bold text-black mt-[4rem] lg:mt-[10rem] 3xl:mt-[15rem]'>
                Skills
            </p>
        </div>
        <hr className='w-[100%] h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700'></hr>


        <div>
        {skillsData.map((skill, index) => (
        <div key={index}>
          <p>{skill}</p>
        </div>
      ))}
        </div>
      
    </div>
  );
}