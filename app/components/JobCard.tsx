import React from 'react'
import Image from 'next/image'

export interface Job {
    image: string,
    title: string,
    location: string[],
    description: string,
    opType: string,
    categories: string[],
}
const buttonStyles = ['ml-4 mt-5 px-3 border-2 rounded-full border-myorange text-myorange', 'ml-4 mt-5 px-6 border-2 rounded-full border-mypurple text-mypurple']


const JobCard = ({image, title, location, description, opType,  categories}:Job) => {

  return (
    <div className='grid grid-cols-12 p-6 my-11 border-2 rounded-3xl border-gray-300 font-Epilogue hover:bg-cardHover'>
        <div className='col-span-1'>
          <Image width={70} height={70} src={image} alt='pic'/>
        </div>
        <div className="col-span-11 mx-4" >
            <div>
              <h3 className='font-bold text-xl mb-2'>{title}</h3>
              {location.map((l, index) => <span className='text-base text-mygray'>{l}   {
              index == location.length -1? "" : " | "} </span>)}
              <p className='text-gray-700 mt-3 text-base '> {description} </p>
            </div>
            <div className='flex'>
              <div className='border-r-2 mt-5 '>
                <button className='mr-4 px-3 py-1 rounded-full bg-bgGreen text-mygreen bg-opacity-10'>{opType}</button>
              </div>
              {categories.map((cat, index) => <button className={buttonStyles[index]}>{cat}</button>)}
            </div>
        </div>
    </div>
  )
}

export default JobCard 