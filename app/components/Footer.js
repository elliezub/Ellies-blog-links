import React from 'react';
import SocialIcons from './SocialIcons';

export default function Footer() {
    return (
        <div className="w-full border-t-[1.3px] border-indigo-600 md:mt-32 mt-12 ">
        <footer className=" text-white mt-20 max-w-6xl mx-auto pb-4">
            <div className='flex justify-center'>
                <div className='md:mt-0 mt-6'>
                    <SocialIcons/>
                </div>
            </div>

            <p className='text-center mt-6'>Designed & built by Ellie Zubrowski</p>
        </footer>
        </div>
    );
};


