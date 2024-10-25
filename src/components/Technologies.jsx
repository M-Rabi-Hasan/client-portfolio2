import { SiAdobephotoshop } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { SiSketch } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { SiAdobexd } from "react-icons/si";
import { motion } from "framer-motion";
import React from 'react'; // Add this line

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate:{ 
    y: [10, -10],
    transition: 
    {duration: duration,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse"
    }
    },
});


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100}}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAdobephotoshop className="text-7xl text-[#FF0000]"/>                
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FiFigma className="text-7xl text-[#0ACF83]"/>                
            </motion.div>

            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSketch className="text-7xl text-[#F7B500]"/>                
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAdobeillustrator className="text-7xl text-[#FF9A00]"/>                
            </motion.div>

            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPhotoshop className="text-7xl text-[#31A8FF]"/>                
            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAdobexd className="text-7xl text-[#FF26BE]"/>                
            </motion.div>
        </motion.div>
            
    </div>
  )
}

export default Technologies