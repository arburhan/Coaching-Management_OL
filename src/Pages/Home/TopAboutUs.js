import React from 'react';
import './TopAboutUs.css';
import ReactPlayer from 'react-player';
import aboutPlayerImage from '../../Media/Images/topAboutImage.webp';

const TopAboutUs = () => {
    return (
        <div className='bg-white text-black py-12 px-12'>
            <div>
                <div className=" grid grid-rows:2 md:grid-cols-2 gap-12 items-center justify-center">
                    <div className='playerPosition rounded-2xl'>
                        <figure>
                            <img className='rounded-2xl playerImage' src={aboutPlayerImage} alt="" />
                        </figure>
                        <span className='aboutPlayerButton'>
                            <svg width="40" height="40" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.5171 12.8434C29.1834 14.3831 29.1834 18.2316 26.5171 19.7713L6.94142 31.0756C4.27476 32.6155 0.941128 30.691 0.941128 27.6116L0.941129 5.00311C0.94113 1.92375 4.27476 -0.00072865 6.94143 1.53918L26.5171 12.8434Z" fill="#5468FF"></path></svg>
                        </span>
                    </div>
                    {/* <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                            width='500px'
                            height='300px'
                            controls
                            volume
                            playIcon
                        />
                    </div> */}
                    <div className='px-12' >
                        <h1 className="text-4xl font-bold text-[#354895]">তোমাকে জেতাতে পাশে আছে জিশান স্যার ও ফাহাদ স্যার-সহ শতশত মেন্টর</h1>
                        <p className="py-6 text-xl">সবার জন্য মানসম্মত পড়াশোনা নিশ্চিতের মাধ্যমে শিক্ষা জীবনের প্রতিটি ধাপ জেতার জন্য রেডি করে তোলাই আমাদের লক্ষ্য</p>
                        <button className="rounded-2xl bg-[#475dff] text-white text-[16px] hover:bg-pink-600 border-0 py-5 px-8">আমাদের সম্পর্কে জেনে নাও</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopAboutUs;