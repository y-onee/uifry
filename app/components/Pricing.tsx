import React from 'react'
import style from './Pricing.module.css';

const Pricing = () => {
  return (
    <main >
      <section className='w-2/6 mx-48'>
        <img className='absolute mt-16 ml-96 pl-56' src="./Star 11.png" alt="" />
        <p className='text-[#FF5555]'>FAQ</p>
        <h1 className='font-bold text-5xl mb-5'>Frequently Asked Questions</h1>
      </section>
      <section className='flex justify-center'>
        <section className='lg:flex w-3/4 items-center justify-center'>
          <div>
            <div className={style.red}>
              <h2 className={style.head}>The best financial accounting app ever!</h2>
              <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className={style.white}>
              <h2 className={style.head}>The best financial accounting app ever!</h2>
              <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className={style.red}>
              <h2 className={style.head}>The best financial accounting app ever!</h2>
              <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
          </div>
          <div>
            <div className={style.white}>
              <h2 className={style.head}>The best financial accounting app ever!</h2>
              <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className={style.red}>
              <h2 className={style.head}>The best financial accounting app ever!</h2>
              <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className={style.white}>
              <h2 className={style.head}>the best financial accounting app ever!</h2>
              <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Pricing