import React from 'react'


export default function Card() {
  return (
    <div className='[perspective:1000px]'>
      <div className="bg-base-100 w-32 h-64 shadow-lg bg-white/5 rounded-xl backdrop-blur-[2px] border border-white/30 flex flex-col pl-1 pr-1 pt-1 hover:scale-105 duration-300 cursor-pointer ">
        <div className=' gap-1'>
          <img src="/img/test.png" alt="" />
        </div>
        <div className=' flex-1 p-1'>
          <p id="name">name:</p>
          <p id="id">ID:</p>
          <p id="type">Type:</p>
        </div>
      </div>
    </div>
  )
}
