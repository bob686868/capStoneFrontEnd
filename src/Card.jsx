import React from 'react'
import { MdDeliveryDining } from "react-icons/md";
const Card = ({src,title,price,text}) => {
  return (
    <article className="w-[80vw] lg:w-full mx-auto bg-[var(--color-light-gray)] my-15 rounded-lg overflow-hidden shadow">
    <img src={src} alt={title} className="w-full object-cover lg:h-60" />
        <div className='py-7 px-[4vw]'>
            <div className='flex justify-between'>
                <div className='font-bold mdF'>{title}</div>
                <div className='font-bold mdF text-[var(--color-o)]'>{price}</div>
            </div>
            <p className='smF'>
            {text}
            </p>   
           <div className='flex justify-center mt-4'>
                <button className='inline-block w-[40vw] smF underline underline-offset-[7px] decoration-[orange-400] text-[var(--color-o)] hover:translate-y-[-1.5vh] transition-all duration-300 hover:text-brown-900 hover:no-underline'>
                    Order A Delivery <MdDeliveryDining className='inline'/>
                </button>
            </div>
        </div>
    </article>
  )
}

export default Card