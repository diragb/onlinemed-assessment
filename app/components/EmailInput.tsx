'use client'

// Packages:
import { useCallback, useState } from 'react'
import { cn } from '../utils/cn'
import sleep from 'sleep-promise'

// Components:
import Input from './Input'
import OTPSection from './OTPSection'

// Constants:
const CORRECT_EMAIL = 'justin2013@gmail.com'

// Functions:
const LoaderIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className='animate-spin'>
    <circle cx='12' cy='12' r='10' stroke='url(#paint0_radial_1_64)' strokeWidth='4'/>
    <defs>
    <radialGradient id='paint0_radial_1_64' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(12 0.5) rotate(90) scale(24)'>
    <stop stopColor='#2563EB'/>
    <stop offset='1' stopColor='white'/>
    </radialGradient>
    </defs>
  </svg>
)

const EmailInput = () => {
  // State:
  const [emailAddress, setEmailAddress] = useState('')
  const [showSpinner, setShowSpinner] = useState(false)
  const [revealOTPSection, setRevealOTPSection] = useState(false)

  // Functions:
  const handleUserEmailAddressInput = useCallback((_emailAddress: string) => {
    setShowSpinner(true)
    setEmailAddress(_emailAddress)
    sleep(1000).then(() => {
      setShowSpinner(false)
      if (_emailAddress === CORRECT_EMAIL) setRevealOTPSection(true)
    })
  }, [])

  // Return:
  return (
    <div className='relative w-full h-full'>
      <div
        className={cn(
          'w-full h-full transition-all duration-300',
          revealOTPSection ? 'h-[148px] opacity-0' : 'h-12 opacity-100',
        )}
      >
        <Input
          value={emailAddress}
          setValue={handleUserEmailAddressInput}
          endAdornment={showSpinner && <LoaderIcon />}
        />
      </div>
      <OTPSection
        emailAddress={emailAddress}
        revealOTPSection={revealOTPSection}
      />
    </div>
  )
}

// Exports:
export default EmailInput
