import React from 'react';
import SocialIcons from './SocialIcons';

export default function Footer() {
    return (
        <div className="w-full border-t-[1.4px] border-indigo-700 md:mt-20 mt-12 ">
        <footer className=" text-white mt-12 max-w-6xl mx-auto pb-4">
            <div className='flex justify-center'>
                <div className='md:mt-0 mt-6'>
                    <SocialIcons/>
                </div>
            </div>

            <p className='text-center mt-6'>Built by Ellie Zubrowski</p>
        </footer>
        </div>
    );
};


