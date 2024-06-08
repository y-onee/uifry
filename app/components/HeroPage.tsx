import React from 'react';
import style from "./HeroPage.module.css";

const HeroPage = () => {
  return (
    <main className='font-clash-display font-medium'>
      <nav className="w-100 flex items-center justify-center">
        <section className=" w-4/5 h-10 p-6 flex items-center justify-between">
          
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
      <section>
        <div>
          <img src="./Group 35896.png" alt="" className='block left-[341px] top-[0px] w-[317px] h-[230px]'/>
          <h1 className='font-bold'>Make The Best Financial Decisions</h1>
          <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          <div>
          <button style={{ background: 'black', color: 'white'}}>Get Started <img src="./Vector 1.png" alt="" /></button>
          <img src="./Group 3.png" alt="" />
          <p>Watch Video</p>
          </div>
          <img src="./Group 35924.png" alt="" />
        </div>
        <div>
          <img src="./Group 35899.png" alt="" />
          <img src="./iPhone-13-Pro-Front (1).png" alt="" />
          <img src="./iPhone-13-Pro-Front (2).png" alt="" />
          <img src="./iPhone-13-Pro-Front (3).png" alt="" />
          <img src="./Group 35887.png" alt="" />
        </div>
        <div>
          <img src="./Star 1.png" alt="" />
          <img src="./Star 2.png" alt="" />
          <img src="./Star 3.png" alt="" />
          <img src="./Star 8.png" alt="" />
        </div>
      </section>
    </main>
    
  )
}

export default HeroPage