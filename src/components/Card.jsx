import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import {IoClose} from 'react-icons/io5';
import { motion } from "framer-motion"
export default function Card({data,reference}) {
  return (
    <>
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.1} dragTransition={{bounceStiffness:800,bounceDamping:10}} className='relative flex-shrink-0 bg-zinc-900/90 w-60 h-72 rounded-[45px] py-10 px-8 text-white p-5 overflow-hidden cursor-pointer'>
        <FaRegFileAlt/>
        <p className='text-sm font-semi-bold leading-tight mt-5'>
            {data.des}
        </p>
        <div className='absolute  w-full  bottom-0 left-0'>
           <div className="flex justify-between py-4 px-8">
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 flex justify-center bg-zinc-600 py-3 rounded-full items-center mb-1'>
            {data.close ?  <IoClose  color='#fff' size='.8em'/> :  <LuDownload color='#fff' size='.8em'/>}

            </span>
           </div>
           {data.tagDetail.isOpen && (
             <div className={`tag w-full py-4 ${data.tagDetail.tagColor} flex justify-center items-center`}>
              <h3 className='text-sm font-semibold'>{data.tagDetail.tagTittle}</h3>
             </div>
           )}
        </div>
    </motion.div>
    </>
  )
}
