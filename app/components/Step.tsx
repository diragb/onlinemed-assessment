// Assets:
import { ChevronLeftIcon } from 'lucide-react'

// Components:
import EmailInput from './EmailInput'

// Functions:
const Step = () => (
  <div className='flex justify-center items-center w-[calc(100vw-4px-354px-20px)] h-full bg-white rounded-3xl'>
    <div className='flex justify-center items-center flex-col gap-6 w-[660px]'>
      <div className='flex flex-col justify-center items-start gap-1 w-full'>
        <div className='text-[#4B556399] font-bold text-xl'>
          <span className='text-[#2563EB]'>
            Step 3
          </span>/9
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-[32px] leading-[48px] font-bold text-[#0D0D12]'>
            What is your email?
          </h1>
          <p className='text-[#353849]'>This is where we send the note</p>
        </div>
      </div>

      <div className='w-full'>
        <EmailInput />
      </div>

      <div className='flex justify-between items-center w-full'>
        <button className='flex items-center justify-center text-[#2563EB] font-bold cursor-pointer'>
          <ChevronLeftIcon className='size-5' />
          <span>Back</span>
        </button>
        <button className='flex justify-center items-center w-[128px] h-[50px] bg-[#4B556399] text-white font-bold text-lg rounded-lg'>
          Next
        </button>
      </div>
    </div>
  </div>
)

// Exports:
export default Step
