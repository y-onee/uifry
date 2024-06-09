import React from 'react'
import style from './Pricing.module.css';

const Pricing = () => {
  return (
    <main className='font-clash-display-semibold'>
      <section className='lg:w-2/6 mx-8 lg:mx-48'>
        <img className='absolute mt-16 ml-96 pl-56' src="./Star 11.png" alt="" />
        <p className='text-[#FF5555] font-clash-display-medium'>F A Q</p>
        <h1 className='font-bold text-5xl mb-5 font-clash-display-bold'>Frequently Asked Questions</h1>
      </section>
      <section className='flex justify-center'>
        <section className='lg:flex w-3/4 items-center justify-center'>
          <div>
            <div className={style.red}>
              <h2 className={style.head}>The best financial accounting app ever!</h2>
              <p className='font-clash-display-light'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className={style.white}>
              <h2 className={style.head}>The best financial accounting app ever!</h2>
              <p className='font-clash-display-light'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className={style.red}>
              <h2 className={style.head}>The best financial accounting app ever!</h2>
              <p className='font-clash-display-light'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
          </div>
          <div>
            <div className={style.white}>
              <h2 className={style.head}>The best financial accounting app ever!</h2>
              <p className='font-clash-display-light'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className={style.red}>
              <h2 className={style.head}>The best financial accounting app ever!</h2>
              <p className='font-clash-display-light'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className={style.white}>
              <h2 className={style.head}>the best financial accounting app ever!</h2>
              <p className='font-clash-display-light'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Pricing