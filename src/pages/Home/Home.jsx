import React from 'react';
import "./style.css";
import "../../index.css"
import bg from '../../assets/D_L_Background_Day.avif'
import bg1 from '../../assets/D_L_Focus_Day.avif'
import sky from "../../assets/D_L_Sky_Day.avif"
import ground from "../../assets/D_L_Foreground_Day.avif"
import character1 from "../../assets/how_it_works_1.avif"
import character2 from "../../assets/how_it_works_2.avif"
import character3 from "../../assets/how_it_works_3.avif"
import box from "../../assets/image.png"
import { BlogCard } from '../../components/Blogcard.jsx';
// import { FooterWithSocialLinks } from "../../components/footer.jsx"

function Home() {
  return (
    <div>
      <div className="parallax">
        <img className="parallax__sky bg-[#785cd4]" src={sky} alt="" />
        <img className="parallax__mountain" src={bg1} alt="" />
         <img className="parallax__bg" src={bg} alt="" />
        <img className="parallax__ground" src={ground} alt="" /> 
        <div className='w-auto relative top-52 bg-[#181414] flex justify-center items-center'>
          <div className='w-[100%] relative top-10 h-[50%] bg-[#fff4f4] flex justify-center items-center'>
            <p className='absolute top-2 text-[3em] text-black vt323-regular'>How this works</p>
            <div className='grid grid-cols-3 gap-3 text-black space-x-12 mt-24'>
              <div className="col-span-1">
                <img src={character1} alt="" className='w-72' />
                <p className='flex justify-center text-[2em] items-center vt323-regular'>Create Tests</p>
                <p className='flex justify-center items-center ml-[1em]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, accusamus?</p>
              </div>
              <div className="col-span-1">
                <img src={character2} alt="" className='w-72' />
                <p className='flex justify-center text-[2em] items-center vt323-regular'>Survive the Test</p>
                <p className='flex justify-center items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, accusamus?</p>
              </div>
              <div className="col-span-1">
                <img src={character3} alt="" className='w-72' />
                <p className='flex justify-center text-[2em] items-center vt323-regular'>Earn points</p>
                <p className='flex justify-center items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, accusamus?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="image-container w-full absolute top-[-2.6em] ">
        <img src={box} alt="" />
      </div>
      <div className='bg-[#181414] flex justify-center items-center '>
        <p className='text-[3em] text-white vt323-regular z-12 absolute top-[28em]'>Features</p>
      </div>
      <div>
        <div className=" absolute left-[-1em] grid grid-cols-3 gap-5">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      {/*<div className="footer">
        <FooterWithSocialLinks/>
      </div> */}
    </div>
  );
}

export default Home;
