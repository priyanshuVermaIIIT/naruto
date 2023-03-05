import React from 'react'

const Content_1 = (props) => {
  return (
    <div>
      
      <div className='flex justify-around my-10'>
        <div className=''>
          <img className='w-[400px] hover:animate-bounce ' src={props.src} alt="" />
        </div>
        <div className=' w-[1200px] mr-8'>
        <div className='text-white text-6xl text-center my-14 hover:animate-bounce'>
      <h1>{props.heading}</h1>
      </div>
          <p className='text-white p-3 rounded-md self-center font-extrabold'>{props.content}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Content_1