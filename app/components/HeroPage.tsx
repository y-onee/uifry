import React from 'react';

const HeroPage = () => {
  return (
    <main className='block font-clash-display font-medium'>
      <section className='fixed block w-full z-40 '>
        <nav className="w-100 flex items-center align-middle justify-center py-5 backdrop-blur-sm">
          <section className=" w-5/6 h-[60px] p-6 flex items-center justify-between">

            <div className="flex w-1/2 justify-between">
              <div className="flex items-center justify-evenly">
                <img src="./Group.png" alt="" />

              </div>
              <div className="lg:flex justify-evenly items-center w-4/5 hidden ">
                <a href="" className="hover:text-[#FF5555] hover:font-bold">Home</a>
                <a href="" className="hover:text-[#FF5555] hover:font-bold">About Us</a>
                <a href="" className="hover:text-[#FF5555] hover:font-bold">Pricing</a>
                <a href="" className="hover:text-[#FF5555] hover:font-bold">Features</a>
              </div>
            </div>

            <button className="bg-black text-white p-3 px-7 rounded font-medium">Download</button>
          </section>
        </nav>
      </section>
      <section className='flex justify-start align-middle ml-40'>
        <div className='w-3/5 mt-[80px]'>
          <div>
            <img className='absolute h-80 -mt-12 -z-40 ml-32' src="./Group 35896.png" alt="" />
          </div>
          <h1 className='mt-10 font-bold text-6xl justify-center '>Make The Best <br />Financial Decisions</h1>
          <p className='my-7 text-lg text-gray-500 w-5/6'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          <div className='flex'>
            <button className="mr-2 hover:border-2 flex justify-center align-middle bg-black text-white p-3 px-7 rounded font-medium">Get Started <img className='my-2 ml-3' src="./Vector 1.png" alt="" /></button>
            <button className="mx-2 hover:border-2 flex justify-center align-middle p-3 px-7 rounded font-medium"><img className='mr-3' src="./Group 3.png" alt="" /><p className='my-1'>Watch Video</p></button>
          </div>
          <img className='' src="./Group 35924.png" alt="" />
        </div>
        <div className=''>
          <img src="./Group 35899.png" alt="" className='absolute z-99 -top-12 right-24 h-128' />
          <img src="./Group 35887.png" alt="" className='absolute top-12 right-32 h-[600px]' />
          <img src="./iPhone-13-Pro-Front (1).png" alt="" className='absolute top-40 right-16 h-[600px]' />
          <img src="./iPhone-13-Pro-Front (2).png" alt="" className='absolute top-28 right-40 h-[600px]' />
          <img src="./iPhone-13-Pro-Front (1).png" alt="" className='absolute top-12 right-64 h-[600px]' />
        </div>
        <div>
          <img className='absolute z-50 right-0 mr-8 mt-8' src="./Star 1.png" alt="" />
          <img className='absolute mt-96 pt-40 -ml-16' src="./Star 2.png" alt="" />
          <img className='absolute z-50 left-0 mt-16 ml-12' src="./Star 3.png" alt="" />
          <img className='absolute left-0 mt-96 pt-20 ml-72' src="./Star 8.png" alt="" />
        </div>
      </section>
    </main>

  )
}

export default HeroPage