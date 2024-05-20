import React from 'react';
import SocialIcons from './SocialIcons';

export default function Footer() {
    return (
        <footer className=" text-white mt-40 max-w-6xl mx-auto">
            <div className='flex justify-between md:items-start md:flex-row flex-col md:text-left text-center items-center'>
                <div className='max-w-xl'>
                    <h2 className='lg:text-3xl text-2xl'>I&apos;m currently open to new job opportunities, so feel free to reach out on Twitter or LinkedIn</h2>
                </div>

                <div className='md:mt-0 mt-6'>
                    <SocialIcons/>
                </div>
            </div>

            <p className='text-center mt-16'>Designed & built by Ellie Zubrowski</p>
        </footer>
    );
};


