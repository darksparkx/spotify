"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { Butcherman } from "next/font/google";
import Button from "./Button";
type Props = {
    children: React.ReactNode;
    className?: string;
};

const Header = ({children, className}: Props) => {
    const router = useRouter();
    const handleLogout = () => {};

    return (
        <div
            className={twMerge(
                "h-fit  bg-gradient-to-b from-emerald-800 p-6",
                className
            )}
        >
            <div className=" w-full mb-4 flex items-center justify-between">
                <div className=" hidden md:flex gap-x-2 items-center">
                    <button
                        className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
                        onClick={() => router.back()}
                    >
                        <RxCaretLeft className="text-white" size={35} />
                    </button>
                    <button
                        className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
                        onClick={() => router.forward()}
                    >
                        <RxCaretRight className="text-white" size={35} />
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                        <HiHome className="text-black" size={20} />
                    </button>
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                        <BiSearch className="text-black" size={20} />
                    </button>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    <>
                        <div>
                            <Button
                                onClick={() => {}}
                                className=" bg-transparent text-neutral-300 font-medium"
                            >
                                Sign up
                            </Button>
                        </div>
                        <div>
                            <Button
                                onClick={() => {}}
                                className=" bg-white text-neutral-800 font-medium"
                            >
                                Log in
                            </Button>
                        </div>
                    </>
                </div>
            </div>
            {children}
        </div>
    );
};

export default Header;
