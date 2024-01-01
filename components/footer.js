import Link from "next/link";
import { useRouter } from "next/router"
import { useState } from "react";

export default function Footer() {
    const router = useRouter();

    function randomColor() {
        let color = '#';
        let letters = '0123456789ABCDEF';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return <>
        <div className="max-w-7xl mx-auto py-12 border-t" id='footeryazi'>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <p className="text-lg text-gray-800">© 2019 - {new Date().getFullYear()} <a href="https://github.com/justthendra" className="text-gray-800 hover:text-[#999]" target="_blank">thendra</a>. All rights reserved.</p>
            </div>
        </div>
    </>
}