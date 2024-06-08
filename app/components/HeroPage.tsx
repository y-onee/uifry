import React from 'react';
import style from "./HeroPage.module.css";

const HeroPage = () => {
  return (
    <main className='font-clash-display font-medium sticky'>
      <nav className="w-100 flex items-center justify-center">
        <section className=" w-5/6 h-[60px] p-6 flex items-center justify-between">
          
          <div className="flex w-1/2 justify-between">
            <div className="flex items-center justify-evenly">
                <img src="./Group.png" alt=""/>
        
            </div>
            <div className="flex justify-evenly items-center w-4/5">
              <a href="" className="text-[#FF5555] font-bold">Home</a>
              <a href="">About Us</a>
              <a href="">Pricing</a>
              <a href="">Features</a>
            </div>
          </div>

          <button className="bg-black text-white p-3 px-7 rounded font-medium">Download</button>
        </section>
      </nav>
      <section className='flex items-start ml-40'>
        <div className='w-3/5'>
          <div  className='absolute z-999999 left-[351px] top-[152px] w-[317px] h-[230px] '>
            <img src="./Group 35896.png" alt=""/>
          </div>
            
          <h1 className='my-14 font-bold text-7xl justify-center '>Make The Best Financial Decisions</h1>
          <p className='my-8 text-lg text-gray-500 w-5/6'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        <div>
          <button style={{ background: 'black', color: 'white'}}>Get Started <img src="./Vector 1.png" alt="" /></button>
          <img src="./Group 3.png" alt="" />
          <p>Watch Video</p>
          </div>
          <img src="./Group 35924.png" alt="" />
        </div>
        <div className='-right-40'>
          <img src="./Group 35899.png" alt="" className='absolute z-99 top-0 right-32 h-128'/>
          <img src="./Group 35887.png" alt="" className='absolute top-0 right-32 h-[600px]'/>
          <img src="./iPhone-13-Pro-Front (1).png" alt="" className='absolute top-32 right-16 h-[600px]'/>
          <img src="./iPhone-13-Pro-Front (2).png" alt="" className='absolute top-16 right-40 h-[600px]'/>
          <img src="./iPhone-13-Pro-Front (1).png" alt="" className='absolute top-0 right-64 h-[600px]'/>
          
        </div>
        {/* <div>
          <img src="./Star 1.png" alt="" />
          <img src="./Star 2.png" alt="" />
          <img src="./Star 3.png" alt="" />
          <img src="./Star 8.png" alt="" />
        </div> */}
      </section>
    </main>
    
  )
}

export default HeroPage