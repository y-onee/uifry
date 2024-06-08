import React from 'react';
import style from './Contact.module.css';

const Contact = () => {
  return (
    <main className={style.all}>
      <section className='flex flex-col'>
        <section className='flex justify-between mx-32'>
          <div>
            <h1 className='flex font-bold text-3xl'><img className='m-1' src="./Testimonials/Frame.png" alt="" />uifry</h1>
            <h2 className='flex'><img className='m-3' src="./Testimonials/Vector.png" alt="" />help@frybix.com</h2>
            <h2 className='flex'><img className='m-3' src="./Testimonials/Vector (1).png" alt="" />+1 234 456 678 89</h2>
          </div>
          <div>
            <h1 className={style.head1}>Links</h1>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Bookings</a></li>
              <li><a href="">Blog</a></li>
            </ul>
          </div>
          <div>
            <h1 className={style.head1}>Legal</h1>
            <ul>
              <li><a href="">Terms Of Use</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Cookies Policy</a></li>
            </ul>
          </div>
          <div>
            <h1 className={style.head1}>Product</h1>
            <ul>
              <li><a href="">Take Tour</a></li>
              <li><a href="">Live Chat</a></li>
              <li><a href="">Reviews</a></li>
            </ul>
          </div>
          <div>
            <h1 className={style.head1}>Newsletter</h1>
            <a href="">Stay Up To Date</a>
            <form action="submit">
              <input className='p-3' type="email" name="email" id="" placeholder='Your email'/>
              <input className="bg-black text-white p-3 px-7 rounded font-medium" type="submit" value="Subscribe" />
            </form>
          </div>
          <div></div>
          
        </section>
        <img className='mt-10' src="./Testimonials/Frame (1).png" alt="" />
      </section>
    </main>
  )
}

export default Contact