"use client"
import React, {useState} from 'react';
import {FaArrowRightLong} from "react-icons/fa6";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {motion} from "framer-motion";

const AboutPage = () => {
    const [isOpen, setIsOpen] = useState(1);
    const animation = {
        initial: {
            opacity: 0,
            x: '-200px'
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3
            }
        }

    }

    return (
        <div className="h-full md:h-[calc(100dvh-50px)] bg-zinc-200 ">
            <div className="grid grid-cols-1 md:grid-cols-2 md lg:grid-cols-4 gap-7 px-5 py-10">

                {isOpen >= 1 && <motion.div
                    variants={animation}
                    initial='initial'
                    animate='animate'
                    className="w-full h-[450px] bg-zinc-50  rounded-xl shadow-md flex flex-col items-center justify-center gap-2 pb-2">
                    <div className="w-full h-[90%]  rounded-t-xl px-3 py-2">
                        <h2 className="text-3xl font-bold">How we&apos;re ?</h2>
                        <p className="text-sm text-darkGray mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <p className="p-2 rounded-full border-2 font-bold  border-black w-10 h-10 text-center">1</p>
                </motion.div>}

                {isOpen >= 2 && <motion.div
                    variants={animation}
                    initial='initial'
                    animate='animate'
                    className="w-full h-[450px] bg-zinc-50  rounded-xl shadow-md flex flex-col items-center justify-center gap-2 pb-2">
                    <div className="w-full h-[90%]  rounded-t-xl px-3 py-2">
                        <h2 className="text-3xl font-bold">What&apos;s our goal ?</h2>
                        <p className="text-sm text-darkGray mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <p className="p-2 rounded-full border-2 font-bold  border-black w-10 h-10 text-center">2</p>
                </motion.div>}
                {isOpen >= 3 && <motion.div
                    variants={animation}
                    initial='initial'
                    animate='animate'
                    className="w-full h-[450px] bg-zinc-50  rounded-xl shadow-md flex flex-col items-center justify-center gap-2 pb-2">
                    <div className="w-full h-[90%]  rounded-t-xl px-3 py-2">
                        <h2 className="text-3xl font-bold">Our Story</h2>
                        <p className="text-sm text-darkGray mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="text-sm text-darkGray">dolore magna aliqua. Ut enim ad minim veniam, quis
                            consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>

                    <p className="p-2 rounded-full border-2 font-bold  border-black w-10 h-10 text-center">3</p>
                </motion.div>}

                {isOpen >= 4 && <motion.div
                    variants={animation}
                    initial='initial'
                    animate='animate'
                    className="w-full h-[450px] bg-zinc-50  rounded-xl shadow-md flex flex-col items-center justify-center gap-2 pb-2">
                    <div className="w-full h-[90%]  rounded-t-xl px-3 py-2">
                        <h2 className="text-3xl font-bold">Our team</h2>
                        <ul className="flex flex-col gap-2 mt-5 ">
                            <li className="h-[100px] bg-zinc-200 w-full rounded-xl relative cursor-pointer flex flex-col items-center justify-center">
                                <p className="z-50 text-xl font-semibold">Front-end</p>
                                <Image src={'/frontend.jpg'} alt="" fill sizes="fill"
                                       className="object-cover rounded-md "/>
                            </li>
                            <li className="h-[100px] bg-zinc-200 w-full rounded-xl relative cursor-pointer flex flex-col items-center justify-center">
                                <p className="z-50 text-xl font-semibold">Back-end</p>
                                <Image src={'/backend.jpg'} alt="" fill sizes="fill"
                                       className="object-cover rounded-md "/>
                            </li>
                            <li className="h-[100px] bg-zinc-200 w-full rounded-xl relative cursor-pointer flex flex-col items-center justify-center">
                                <p className="z-50 text-xl font-semibold">SEO</p>
                                <Image src={'/seo.jpg'} alt="" fill sizes="fill" className="object-cover rounded-md "/>
                            </li>
                        </ul>
                    </div>

                    <p className="p-2 rounded-full border-2 font-bold border-black w-10 h-10 text-center ">4</p>
                </motion.div>}


            </div>
            <div className="w-full flex items-center justify-center">
                <Button disabled={isOpen === 4} onClick={() => setIsOpen(prev => prev + 1)} variant="default"
                        className="">Next <FaArrowRightLong/></Button>
            </div>
        </div>
    );
};

export default AboutPage;