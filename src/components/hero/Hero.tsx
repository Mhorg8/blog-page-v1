"use client";
import {easeIn, motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
    const animationVariants = {
        initial: {
            opacity: 0,
            scale: 0,
        },
        animate: {
            opacity: 1,
            scale: 1.1,

            transition: {
                duration: 0.6,
                easeIn: easeIn,
            },
        },
    };

    return (
        <div
            className="h-[calc(100dvh-60px)] bg-zinc-100 w-full flex flex-col items-center justify-center relative overflow-hidden">
            <motion.h1
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    duration: 0.5,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 130,
                }}
                className="text-center text-3xl font-bold md:text-4xl lg:text-5xl z-10"
            >
                Write without any borders from Anywhere.
            </motion.h1>
            <motion.div className="z-[100]"
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            duration: 0.5,
                            delay: 0.6,
                            type: "spring",
                            stiffness: 130,
                        }}>
                <Button variant="default" className="mt-3 hover:text-green  rounded-none " size="lg">
                    <Link href='/newBlog'>Get Start</Link>
                </Button>
            </motion.div>
            <motion.div
                variants={animationVariants}
                initial="initial"
                animate="animate"
                className="w-44 h-44 rounded-full bg-lightCream absolute top-20 -right-10 bg-opacity-40 shadow-md"
            />
            <motion.div
                variants={animationVariants}
                initial="initial"
                animate="animate"
                className="w-44 h-44 rounded-full bg-brown absolute top-[5%] -left-10 bg-opacity-30 shadow-md"
            />
            <motion.div
                variants={animationVariants}
                initial="initial"
                animate="animate"
                className="w-44 h-44 rounded-full bg-lightGray absolute top-[40%]  md:top-1/3 md:translate-y-1/3 left-10 md:left-1/2 md:-translate-x-1/2 bg-opacity-50 shadow-md"
            />
            <motion.div
                variants={animationVariants}
                initial="initial"
                animate="animate"
                className="w-44 h-44 rounded-full bg-lightGray absolute bottom-5 right-10 bg-opacity-20 shadow-md"
            />
        </div>
    );
};

export default Hero;
