import React from 'react'

const Gallery = () => {
  return (
    <main>
      <img src="./Testimonials/Group 1000002356 (1).png" alt="" className='absolute left-0 -z-40' />
      <section className=' flex column justify-center w-full min-h-screen'>
        
        <img src="./Testimonials/Group 35905 (2).png" alt="" className='absolute left-0 mx-40 my-80'/>
        <img src="./Testimonials/Group 1000004718.png" alt="" className='absolute right-0 mx-40 my-40' />
      <section className='flex bg-black w-full mx-40 my-40'>
        <div className='flex items-center '>
          <div className='ml-20'>
            <h1 className='m-10 text-white font-bold text-5xl'>Ready To Get Started?</h1>
            <p className='text-white m-10 font-extralight text-lg'>Risus habitant leo egestas mauris diam eget morbi tempus<br /> vulputate.</p>
            <button className='m-10 p-4 rounded flex text-light items-center bg-white text-black'>Download App<img className='ml-3' src="./Testimonials/Vector (2).png" alt="" /></button>
          </div>
          
        </div>
        <div className='flex items-center'>                      
            <img src="./Testimonials/3.png" alt="" className='absolute right-0 mx-40 -mt-4 h-2/5'/>
            <img src="./Testimonials/2 (1).png" alt="" className='absolute right-20 mx-32 mt-16 h-2/5'/>

            <img src="./Testimonials/1.png" alt="" className='absolute right-40 mr-40 mt-32 h-2/5'/>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Gallery