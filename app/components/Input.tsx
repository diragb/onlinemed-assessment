// Packages:
import React, { useState } from 'react'
import { cn } from '../utils/cn'

// Functions:
const Input = ({
  value,
  setValue,
  endAdornment,
}: {
  value: string
  setValue: (value: string) => void
  endAdornment?: React.ReactNode
}) => {
  // State:
  const [isFocused, setIsFocused] = useState(false)

  // Return:
  return (
    <div
      className={cn(
        'relative z-10 flex justify-between items-center w-full h-12 py-3 px-4 rounded-lg border bg-white transition',
        isFocused ? 'border-[#2563EB] shadow-[0px_0px_0px_2px_#2563EB40]' : 'border-border shadow-none',
      )}
    >
      <input
        type='text'
        value={value}
        onChange={event => setValue(event.target.value)}
        placeholder='Enter your email'
        className='w-[calc(100%-24px)] outline-none border-none bg-transparent text-[#353849] placeholder:text-[#4B5563B2]'
        autoComplete='new-password'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {endAdornment}
    </div>
  )
}

// Return:
export default Input
