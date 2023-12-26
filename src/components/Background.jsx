import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed w-full h-screen z-[2]'>
     <div className="absolute w-full py-10 top-[5%] flex justify-center text-xl dark:text-zinc-400 text-zinc-700">Docs-mini</div>
     <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-[13vw] dark:text-zinc-900 text-black leading-none tracking-tighter ">Docs</h1>     
    </div>

    </>
  )
}

export default Background