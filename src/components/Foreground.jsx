import React, { useRef } from 'react'
import Card from './Card'
import HamburgerMenu from './HamburgerMenu';

export default function Foreground() {

const ref = useRef(null);

    const data=[
        {
            des:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            filesize:".9mb",
            close:false,
            tagDetail:{
                isOpen:true,
                tagTittle:"Download Now",
                tagColor:"bg-green-600"
            }
        },
        {
            des:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            filesize:".9mb",
            close:false,
            tagDetail:{
                isOpen:false,
                tagTittle:"Download Now",
                tagColor:"bg-green-600"
            }
        },
        {
            des:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            filesize:".9mb",
            close:true,
            tagDetail:{
                isOpen:true,
                tagTittle:"Download Now",
                tagColor:"bg-sky-600"
            }
        },
        {
            des:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            filesize:".9mb",
            close:false,
            tagDetail:{
                isOpen:false,
                tagTittle:"Download Now",
                tagColor:"bg-green-600"
            }
        },
        {
            des:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            filesize:".9mb",
            close:true,
            tagDetail:{
                isOpen:true,
                tagTittle:"Download Now",
                tagColor:"bg-green-600"
            }
        },
       
    ]
  return (
    <>
       <div ref={ref} className="fixed z-[3] t0p-0 left-0 w-full h-screen flex gap-5 flex-wrap p-10">
      <HamburgerMenu/>
        {data.map((item)=>(
          <Card data={item} reference={ref}/>
        ))}
        </div>
    </>
  )
}
