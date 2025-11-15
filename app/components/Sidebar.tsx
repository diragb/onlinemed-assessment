import { BadgeCheckIcon } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between items-center w-[354px] h-full p-3.5 text-black'>
      <div className='flex flex-col justify-center gap-14 w-full'>
        <span className='text-xl font-bold'>OnlineMed</span>
        <div className='flex flex-col justify-center items-start gap-5'>
          <div className='flex justify-center items-center gap-1'>
            <BadgeCheckIcon className='size-5 text-[white] fill-[#2563EB]' />
            <span className='font-bold text-sm text-[#2563EB]'>Money Back Guarantee</span>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='font-bold text-[32px] leading-[48px] text-[#111827]'>
              Your <span className='text-[#2563EB]'>Work</span> Note<br />
              is Minutes Away
            </div>
            <p className='text-[#111827]'>
              Note: Due to capacity we are currently only
              able to provide a limited number of notes per
              day. To see if you qualify please fill out the
              following short survey!
            </p>
          </div>
        </div>
      </div>
      <span>Testimonials Section</span>
    </div>
  )
}

export default Sidebar
