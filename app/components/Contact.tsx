import React from 'react';
import style from './Contact.module.css';

const Contact = () => {
  return (
    <main className={style.all}>
      <section className='flex flex-col font-clash-display-medium min-w-[932px]'>
        <section className='flex justify-between mx-40'>
          <div className='flex flex-row lg:flex-col'>
            <h1 className='flex font-bold text-3xl'><img className='m-1' src="./Testimonials/Frame.png" alt="" />uifry</h1>
            <h2 className='flex'><img className='m-3 h-5' src="./Testimonials/Vector.png" alt="" />help@frybix.com</h2>
            <h2 className='flex'><img className='m-3 h-5' src="./Testimonials/Vector (1).png" alt="" />+1 234 456 678 89</h2>
          </div>
          <div className='hidden lg:block'>
            <h1 className={style.head1}>Links</h1>
            <ul>
              <li className='hover:text-[#FF5555]'><a href="">Home</a></li>
              <li className='hover:text-[#FF5555]'><a href="">About Us</a></li>
              <li className='hover:text-[#FF5555]'><a href="">Bookings</a></li>
              <li className='hover:text-[#FF5555]'><a href="">Blog</a></li>
            </ul>
          </div>
          <div className='hidden lg:block'>
            <h1 className={style.head1}>Legal</h1>
            <ul>
              <li className='hover:text-[#FF5555]'><a href="">Terms Of Use</a></li>
              <li className='hover:text-[#FF5555]'><a href="">Privacy Policy</a></li>
              <li className='hover:text-[#FF5555]'><a href="">Cookies Policy</a></li>
            </ul>
          </div>
          <div className='hidden lg:block'>
            <h1 className={style.head1}>Product</h1>
            <ul>
              <li className='hover:text-[#FF5555]'><a href="">Take Tour</a></li>
              <li className='hover:text-[#FF5555]'><a href="">Live Chat</a></li>
              <li className='hover:text-[#FF5555]'><a href="">Reviews</a></li>
            </ul>
          </div>
          <div className='hidden lg:block'>
            <h1 className={style.head1}>Newsletter</h1>
            <a href="">Stay Up To Date</a>
            <form action="submit">
              <input className='p-3' type="email" name="email" id="" placeholder='Your email' />
              <input className="bg-black text-white p-3 px-7 rounded font-medium" type="submit" value="Subscribe" />
            </form>
          </div>


        </section>
        <div className='flex justify-center'>
          <img className='mt-10 w-2/3 ' src="./Testimonials/Frame (1).png" alt="" />
        </div>
      </section>
    </main>
  )
}

export default Contact