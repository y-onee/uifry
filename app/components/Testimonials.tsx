import React from 'react'

const Testimonials = () => {
  return (
    <main>
      <section className='m-10 flex flex-col align-center h-screen' >
        <p className='text-center font-medium'>TESTIMONIAL</p>
        <h1 className='font-bold text-center text-5xl'>What Our Users  <br />Say About Us?</h1>
        <section className='flex h-screen'>
          <div className='w-3/6'>
            <img className='absolute mt-48 ml-40 h-72' src="./Testimonials/Group 1000002356 (1).png" alt="" />
            <img className='absolute h-3/4 mt-8 ml-8' src="./Testimonials/Group 35905 (4).png" alt="" />
            <img className='absolute mt-52 ml-52 h-80' src="./Testimonials/Ellipse 41.png" alt="" />
            <img className='absolute mt-72 ml-96 h-14' src="./Testimonials/Group 1000002331.png" alt="" />
            
            <img className='absolute mt-20 ml-80 h-60' src="./Testimonials/Ellipse 42.png" alt="" />
            <img className='absolute mt-96 ml-96 h-56' src="./Testimonials/Ellipse 43.png" alt="" />
            <img className='absolute mt-24 ml-24 h-56' src="./Testimonials/Ellipse 44.png" alt="" />
            <img className='absolute mt-96 ml-28 h-60' src="./Testimonials/Ellipse 45.png" alt="" />
          </div>
          <div className='w-3/6 flex flex-col leading-loose justify-center align-baseline'>
            <h2 className='font-bold text-4xl mb-10'>The Best Financial Accounting App Ever!</h2>
            <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
            <div className='my-5 flex w-32 justify-between'>
              <img src="./Testimonials/Group 27.png" alt="" className='h-12 m-1  hover:blur-0 hover:h-12'/>
              <img src="./Testimonials/Group 28.png" alt="" className='h-10 m-1 blur-sm hover:blur-0 hover:h-12'/>
              <img src="./Testimonials/Group 29.png" alt="" className='h-10 m-1 blur-sm hover:blur-0 hover:h-12'/>
              <img src="./Testimonials/Group 30.png" alt="" className='h-10 m-1 blur-sm hover:blur-0 hover:h-12'/>
              <img src="./Testimonials/Group 31.png" alt="" className='h-10 m-1 blur-sm hover:blur-0 hover:h-12'/>
            </div>
            <p className='font-extrabold text-base'>Nick Jonas</p>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Testimonials