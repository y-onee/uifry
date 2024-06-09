import React from 'react'
import style from './Features.module.css'

const Features = () => {
  return (
    <main className='block min-h-screen'>
      <section className='h-screen flex justify-center align-middle'>
        <div className='w-3/6'>
          <img className='absolute -z-40 -ml-8' src="./Features/Group 35930.png" alt="" />
          <img className='absolute h-3/4 mt-8 ml-8' src="./Features/Group 35898.png" alt="" />
          <img className='absolute w-96 mt-16 ml-48' src="./Features/iphone-13-Pro-Front.png" />
          <img className='absolute mt-8 ml-12' src="./Star 2 (1).png" alt="" />
          <img className='absolute right-0 mt-96 pt-96 ' src="./Star 5.png" alt="" />


        </div>
        <div className='flex flex-col mr-20'>
          <p className='text-[#FF5555]'>FEATURES</p>
          <h1 className='font-bold text-5xl mb-5'>Uifry Premium</h1>
          <div>
            <div className={style.head3}>
              <img src="./Features/star-05.png" alt="" />
              <h3>Budgeting Intervals</h3>
            </div>
            <p className='my-4  text-gray-600 leading-7'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          </div>
          <div>
            <div className={style.head3}>
              <img src="./Features/Icon.png" alt="" />
              <h3>Budgeting Intervals</h3>
            </div>
            <p className='my-4  text-gray-600 leading-7'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          </div>
          <div>
            <div className={style.head3}>
              <img src="./Features/cube-04.png" alt="" />
              <h3>Budgeting Intervals</h3>
            </div>
            <p className='my-4  text-gray-600 leading-7'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          </div>
        </div>
      </section>
      <section className='flex align-middle'>
        <div className='flex flex-col justify-center w-1/2 m-32'>
          <div>
            <p className='text-[#FF5555]'>ADVANTAGES</p>
            <h1 className='font-bold text-5xl mb-5'>Why Choose Uifry?</h1>
          </div>
          <div className='flex align-middle my-2'>
            <img src="./Features/Group 35899.png" alt="" />
            <h3 className='my-1 justify-center font-bold text-3xl ml-5'>Clever Notifications</h3>
          </div>
          <div className='my-4  text-gray-600 leading-7'>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
          </div>
        </div>
        <div>
          <img className='absolute right-0 h-3/4 mt-8 mr-8' src="./Features/Group 35903.png" alt="" />
          <img className='absolute right-0 mt-40 mr-28 -z-40' src="./Features/Group 35931.png" alt="" />
          <img className='absolute right-0 w-96 mt-20 mr-24' src="./Features/iPhone-13-Pro-Front (1).png" alt="" />
          <img className='absolute right-0 mt-72 mr-28 h-32' src="./Features/On Hold.png" alt="" />
        </div>
      </section>
      <section className='flex h-screen'>
        <img className='absolute ml-96 pl-80' src="./Star 6.png" alt="" />
        <img className='absolute right-0 mt-96 pt-72 mr-80' src="./Star 7.png" alt="" />
        <div className='w-3/6 flex flex-col justify-center align-middle'>

          <img className='absolute h-3/4 mt-8 ml-8' src="./Testimonials/Group 35905 (4).png" alt="" />
          <img className='absolute mt-16 ml-24 -z-40' src="./Features/Group 35932.png" alt="" />
          <img className='absolute w-96 mt-32 ml-48' src="./Features/iPhone-13-Pro-Front (2).png" alt="" />
          <img className='absolute -mt-16 ml-64 h-32' src="./Features/Group (1).png" alt="" />
        </div>
        <div className='w-3/6 flex flex-col justify-center mr-40 leading-7'>
          <div className='flex align-middle my-2'>
            <img src="./Features/Group 35899 (1).png" alt="" />
            <h3 className='flex align-middle my-1 justify-center font-bold text-3xl ml-5'>Fully Customizable</h3>
          </div>
          <div className='my-4  text-gray-600'>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
          </div>
        </div>
      </section>
    </main>
  )
}

export default Features