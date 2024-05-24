import React from 'react';
import SocialIcons from './SocialIcons';

export default function Footer() {
    return (
        <footer className=" text-white md:mt-40 mt-12 max-w-6xl mx-auto">
            <div className='flex justify-center'>
                <div className='md:mt-0 mt-6'>
                    <SocialIcons/>
                </div>
            </div>

            <p className='text-center mt-6'>Designed & built by Ellie Zubrowski</p>
        </footer>
    );
};


