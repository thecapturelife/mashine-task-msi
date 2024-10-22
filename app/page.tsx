'use client'
import { FaInstagram, FaLinkedin, FaSquareFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Cards from "./InsightCards/page";
import Contact from "./Components/Contact";
import { useState } from "react";
import Image from "next/image";
import mark1 from './assets/Mask group.jpg';
import mark2 from './assets/Vector 1.png';
import mark3 from './assets/Group 940.jpg';
import mark4 from './assets/Group 943.jpg';
import mark5 from './assets/Group 942.jpg';
import mark6 from './assets/Group 941.jpg';
import mark7 from './assets/ads.jpg';
import mark8 from './assets/Group 2340.jpg';
import mark9 from './assets/mask2.jpg';
import mark10 from './assets/image 283.png';
import mark11 from './assets/image 284.png';
import mark12 from './assets/image 285.png';



export default function Home() {
  const [menuOpen , setMenuOpen] =useState(false)
  return (
    <div className="relative w-full min-h-screen text-black">
      <Image 
        src={mark1} 
        alt="Background" 
        layout="background" 
        objectFit="cover" 
        className="absolute inset-0" 
        priority 
      />

      <div className="relative z-10 flex h-32 items-center justify-between px-6 md:px-20">
        <Image 
          src={mark2} 
          alt="Logo" 
          width={64} 
          height={32}
          className="w-12 h-6 md:w-16 md:h-8" 
        />

        <div className="md:hidden relative">
          <button
            className="bg-white text-black rounded-md p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)} 
          >
            Menu
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-12 bg-gray-800 rounded-md shadow-lg z-10">
              <ul className="flex flex-col p-4 space-y-2">
                {['About Us', 'How We Help', 'Pricing'].map((item) => (
                  <li
                    key={item}
                    className="text-white cursor-pointer"
                    onClick={() => setMenuOpen(false)} 
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
    

        <ul className="hidden md:flex space-x-6 lg:space-x-12 text-white text-base md:text-lg">
           {['About Us', 'How We Help', 'Pricing', 'Portfolios', 
           'Testimonials', 'Insights'].map((item) => (
                <li key={item} className="relative inline-block 
                cursor-pointer">
                   <span className="relative inline-block">
                        {item}
                      <span className="block h-0.5 bg-white transition-all 
                      duration-300 absolute left-0 bottom-0 w-0 hover:w-full" />
                  </span>
               </li>
             ))}
         <li>
            <Contact />
         </li>
       </ul>
    </div>

        <div className="absolute inset-0 flex flex-col mt-96">
           <h1 className="py-20 px-24 text-6xl text-white">Lorem ipsum dolor sit amet</h1>
              <p className="hidden md:block ml-24 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
                  mattis velit nulla. In hac habitasse platea dictumst.<br />
                  Fusce non venenatis velit. Proin luctus malesuada mauris 
                  vitae mattis. Pellentesque iaculis elit lorem, et varius <br />
                  ipsum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Donec mattis velit nulla. In hac habitasse <br />
                  platea dictumst.
             </p>
       </div>

      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-24 space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white">Lorem ipsum dolor sit amet</h1>
              <p className="text-sm md:text-lg lg:text-xl text-white leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.<br />
                Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis.
              </p>
      </div>

      <div className="w-full bg-white pt-[47rem]  py-16 xs:mt-8">
          <Image 
             src={mark9}
             alt="logo9"
             className="w-full mt-16 max-w-[1528px] h-auto object-cover mx-auto" 
  />


      <div className="px-6 md:px-20 mt-12 lg:mt-24">
           <h1 className="text-2xl md:text-4xl lg:text-6xl">Lorem ipsum dolor sit amet, consectetur</h1>
           <p className="mt-6 md:mt-12 text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In <br/>
              hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada<br/>
              mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a.<br/>
              Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit <br/>
              amet aliquam augue. Praesent auctor, purus non convallis accumsan, nibh odio <br/>
              gravida felis, vitae mollis massa lectus a neque. Mauris mollis elit quis iaculis iaculis.<br/>
              Vestibulum molestie nisl eget aliquet scelerisque. Vivamus efficitur dui <br/>
              eget velit interdum, non dapibus nisi fringilla. Mauris fermentum venenatis <br/>
              volutpat. Quisque efficitur ultricies erat eget rutrum. Phasellus feugiat quam eget <br/>
              est dapibus, non eleifend justo fermentum. Sed et commodo arcu, id euismod dui.
           </p>
       </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 px-6 md:px-20 justify-items-end ">
    <div className="w-full md:w-auto">
      <div className="flex items-start">
        <div className="h-32 border-l-2 border-black"></div>
        <div className="ml-4">
          <h1 className="text-lg font-semibold">Feature One</h1>
          <p className="mt-4 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
            Donec mattis velit nulla. In hac habitasse platea dictumst.<br/>
            Fusce non venenatis velit. Proin luctus malesuada mauris <br/>
            vitae mattis. Pellentesque iaculis elit lorem.
          </p>
        </div>
      </div>
    </div>

    <div className="w-full md:w-auto">
      <div className="flex items-start">
        <div className="h-32 border-l-2 border-black"></div>
        <div className="ml-4">
          <h1 className="text-lg font-semibold">Feature Two</h1>
          <p className="mt-4 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
            Donec mattis velit nulla. In hac habitasse platea dictumst.<br/>
            Fusce non venenatis velit. Proin luctus malesuada mauris <br/>
            vitae mattis. Pellentesque iaculis elit lorem.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>



    <div className="bg-gray-100">
     <h1 className="px-20 py-12 text-6xl">
     Lorem ipsum dolor sit amet, <br />
     consectetur
   </h1>
   <div className="flex flex-col md:flex-row md:justify-center">
     <div className="flex flex-col items-center md:items-start ml-20 py-4 gap-6">
       <div>
        <Image
        src={mark3}
        alt="logo1"
        className="h-[22rem] w-[45rem] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        />
      </div>
      <div>
        <Image
        src={mark4}
        alt="logo2"
        className="h-[14rem] w-[45rem] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        />
      </div>
    </div>

    <div className="flex flex-col items-center md:items-start ml-20 py-4 gap-6 mr-12 ">
      <div>
        <Image 
        src={mark5}
        alt="logo3"
        className="h-[14rem] w-[45rem] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        />
      </div>
      <div>
        <Image
        src={mark6}
        alt="logo4"
        className="h-[22rem] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        />
      </div>
    </div>
  </div>
</div>

      <div className="bg-gray-100 py-12">
        
        <div className="flex flex-wrap justify-between items-center px-6 md:px-20 mt-12 space-y-6 md:space-y-0">
          {['8+ years of Success', '200+ Members', '155+ All Over The USA', '200k Satisfied Clients'].map((item, index) => (
            <div key={index} className="flex-1 min-w-[150px] text-center">
              <h1 className="text-3xl md:text-4xl font-bold">{item.split(' ')[0]}</h1>
              <span className="text-lg">{item.split(' ').slice(1).join(' ')}</span>
            </div>
          ))}
        </div>
      </div>



  <div className="px-6 md:px-20 mt-16">
       <h1 className="text-2xl md:text-4xl lg:text-6xl">Lorem Ipsum</h1>
           <p className="mt-6 text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac <br />
              habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae <br />
              mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et <br />
              efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue
           </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[1, 2, 3].map((num) => (
              <div key={num} className="p-6 bg-blue-200 rounded-md transform transition duration-300 hover:scale-105 cursor-pointer">
                   <h1 className="text-3xl font-bold text-black">{`0${num}`}</h1>
                  <div className="border-b border-black mt-3"></div>
                    <h2 className="mt-6 text-2xl font-semibold text-black">
                      Lorem ipsum dolor sit amet, consectetur
                    </h2>
                    <p className="mt-6 text-base text-black">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue.
                    </p>
               </div>
                  ))}
         </div>
       </div>


      

      <div className="mt-16 ">
        <Image 
        src={mark7}
        alt="Advertisement"
        className="w-full h-auto"
        />
      </div>

      <Cards/>

      <div className="relative mt-16">
        <Image 
        src={mark8}
        alt="your"
        className="w-full h-auto"
       />

        <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-5xl lg:text-6xl">Lets work Together</h1>
            <p className="hidden md:block absolute text-white ml-96 -mt-40 text-2xl">
            Lorem ipsum dolor sit amet consectetur. Mattis cursus nulla ornare tristique <br />
            euismod arcu tristique nisl id nibh. viverra feugiat viverra. Lorem ipsum dolor <br />
            sit amet consectetur
            </p>

    <div className="absolute top-0 right-0 mt-40 mr-4 md:mt-72 md:mr-16">
        <button className="bg-white text-black font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg">
               View Vacancies
        </button>
      </div>
  </div>
      <div className="bg-[#002A3A] text-white h-auto py-7">
       <ul className="flex flex-wr gap-6  justify-center md:gap-11 md:ml-16">
          <span><li className="text-xl  md:text-2xl">Quick Links</li></span>
                <li className="mt-2 inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300 hover:after:w-full">Home</li>
                <li className="mt-2 inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300 hover:after:w-full">About Us</li>
                <li className="mt-2 inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300 hover:after:w-full">Pricing</li>
                <li className="mt-2 inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300 hover:after:w-full">Portfolios</li>
                <li className="mt-2 inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300 hover:after:w-full">Insights</li>
       </ul>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-12 px-4 md:px-0 "> 
  <div className="border border-gray-700 p-4 text-center flex flex-col gap-4 ">
    <div className="mx-auto w-full h-12 flex items-center bg-gray-600 transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer p-2"> {/* Added padding for better spacing */}
      <Image 
        src={mark10}
        alt="Image 1"
        width={100} 
        height={100} 
        className="object-cover h-7 w-7" 
      />
      <h1 className="ml-3 text-left text-sm">Lorem ipsum dolor sit amet</h1> 
    </div>

    <div className="mx-auto w-full h-12 flex items-center bg-gray-600 transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer p-2">
      <Image 
        src={mark11}
        alt="Image 2" 
        width={100} 
        height={100} 
        className="object-cover h-7 w-7" 
      />
      <h1 className="ml-3 text-left text-sm">Lorem ipsum dolor sit amet</h1>
    </div>

    <div className="mx-auto w-full h-12 flex items-center bg-gray-600 transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer p-2">
      <Image 
        src={mark12}
        alt="Image 3" 
        width={100} 
        height={100} 
        className="object-cover h-7 w-7" 
      />
      <h1 className="ml-3 text-left text-sm">Lorem ipsum dolor sit amet</h1>
    </div>
  </div>



          <div className="border border-gray-700 p-4 text-center flex flex-col gap-6">
             {["Lorem", "ipsum", "Consectetur", "Efficitur"].map((text, index) => (
            <div key={index} className="mx-auto w-full max-w-xs h-12 bg-gray-600 flex items-center  transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
             <h1 className="ml-5">{text}</h1>
         </div>
      ))}
    </div>

    <div className="border border-gray-700 p-4 flex flex-col items-start">
      <h1 className="text-2xl">Contact Us</h1>
           <p className="mt-8">Lorem Ipsam, Iso Lorem,<br/> Iso Lorem Posum</p>
      <h1 className="font-bold mt-4">+91 00000 00000</h1>
           <h2 className="font-normal">info@demo.com</h2>
               <h2 className="font-semibold mt-8">Follow us on</h2>
      <div className="flex gap-4 mt-4">
        <FaSquareFacebook className=" transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"/>
            <FaXTwitter className=" transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"/>
                       <FaLinkedin className=" transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"/>
                                   <FaYoutube className=" transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"/>
                                              <FaInstagram className=" transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"/>
        </div>
    </div>

    </div>

       <h1 className="text-center mt-5 opacity-70">©2024 Demo. All rights reserved.</h1>
    </div>
    </div>
  );
}