import React from 'react';
import bannerImage from '../../Media/Images/home-hero-images.webp';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-[#233071] ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImage} className="max-w-2xl" alt='bannerImage' />
                    <div className='text-white p-5'>
                        <h1 className="text-[56px] font-bold leading-[70px]">এবার সবাই শিখবো, সবাই জিতবো!</h1>
                        <p className="py-6 text-[20px]">পড়াশোনায় জিতে যাওয়ার সবকিছু এখন তোমার হাতের মুঠোয়.</p>
                        <div className='flex gap-6' >
                            <button className='border-2 border-pink-600 text-pink-700 hover:text-[#5468ff] bg-white hover:border-[#5468ff] px-[25px] py-[18px] rounded-2xl' >কোর্স ঘুরে দেখা</button>
                            <button className=' px-[40px] py-[20px] bg-pink-600 rounded-2xl hover:bg-[#5468ff] hover:text-white' >
                                <div className='flex' >
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                        </svg></span>
                                    <span>শিখতে শুরু করো</span>
                                </div>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;