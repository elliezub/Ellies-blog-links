import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className=" text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <span className="text-lg font-bold">Logo?</span>
                <div className="flex space-x-4">
                    <Link href="/about">
                        About
                    </Link>
                    {/* <Link href="/contact">
                        Contact
                    </Link> */}
                </div>
                <div>
                    Links
                    {/* Add social media links here */}
                </div>
            </div>
        </footer>
    );
};


