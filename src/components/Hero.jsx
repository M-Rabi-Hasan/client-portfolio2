import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/images/profile5.png";
import { motion } from "framer-motion";
import Link from "next/link"; // Ensure Link is imported
import Image from "next/Image"; // Ensure Link is imported


const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible:{
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Abdul Rafay</motion.h1>
                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                    bg-clip-text text-3xl tracking-tight text-transparent">Graphic Designer</motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl motion.py-6 font-light md:tracking-tighter">{HERO_CONTENT}</motion.p>
                </div>
                <motion.div
                variants={container(1.5)}
                initial="hidden"
                animate="visible"
                className="mt-3">
                    <Link href="/contact">
                    <span className=" px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mr-4">
                        Contact Us
                    </span>
                    </Link>
                </motion.div>  
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.div
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, delay: 1.2}}>
                    <div><Image src={profilePic} alt="Abdul Rafay"/></div>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero