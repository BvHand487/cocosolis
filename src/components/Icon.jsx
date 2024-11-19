import React from 'react'

function Icon({ url, text }) {
    return (
        <div className="bg-primary-light rounded-full size-[3.6rem] border-white border-solid border-[1px] flex justify-center items-center">
            {
            url?
            <img className="w-1/2 h-1/2" src={url} /> :
            <p className='text-white text-xl'>{text}</p>
            }
        </div>
    )
}

export default Icon