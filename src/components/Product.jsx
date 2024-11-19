import React from 'react'
import Stars from './Stars'

function Product({ title, subtitle, starCount, description, price }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className=''>
        <img src="https://placehold.co/200x320"></img>
      </div>
      <div className='flex flex-col justify-start items-center'>
        <h2 className='text-primary-dark'>{title}</h2>
        <h4 className='text-primary-dark text-center'>{subtitle}</h4>
        <Stars count={starCount}/>
        <p className='text-primary-dark text-center'>{description}</p>
      </div>
      <div className='w-full flex flex-col items-center justify-self-end mt-4'>
        <h2 className='text-primary-dark'>{`${price},00 лв.`}</h2>
        <button className='w-full py-2 text-white bg-primary-dark'>ДОБАВИ</button>
      </div>
    </div>
  )
}

export default Product