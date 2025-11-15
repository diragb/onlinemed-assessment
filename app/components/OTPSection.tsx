// Packages:
import { cn } from '../utils/cn'

// Functions:
const OTPSection = ({
  emailAddress,
  revealOTPSection,
}: {
  emailAddress: string
  revealOTPSection: boolean
}) => (
  <div 
    className={cn(
      'absolute top-0 z-0 flex flex-col w-full border border-[#DFE1E6] rounded-lg overflow-hidden transition-all',
      revealOTPSection ? 'opacity-100' : 'opacity-0 pointer-events-none',
    )}
  >
    <div
      className={cn(
        'flex justify-between items-center w-full py-3 px-6 transition-all',
        revealOTPSection ? 'bg-[#E8F0FD]' : 'bg-white',
      )}
    >
      <div className={cn('flex justify-center items-center transition-all delay-700 duration-300', revealOTPSection ? 'gap-6' : 'gap-0')}>
        <span
          className={cn(
            'text-[#2563EB] transition-all delay-700 duration-300',
            revealOTPSection ? 'w-10 opacity-100' : 'w-0 opacity-0',
          )}
        >
          Email
        </span>
        <span className={cn('text-[#2563EB] transition-all delay-700', revealOTPSection && 'font-bold shimmer-text')}>{emailAddress}</span>
      </div>
      <button className={cn('relative text-[#353849] cursor-pointer transition delay-700 duration-300', revealOTPSection ? 'opacity-100' : 'opacity-0')}>
        Change
        <span className='absolute left-0.5 -bottom-1.5 tracking-[-0.0125em]'>.............</span>
      </button>
    </div>
    <div
      className='flex justify-start items-start p-6'
    >
      <div
        className={cn(
          'flex justify-center items-start flex-col gap-1 transition-all duration-300',
          revealOTPSection ? 'h-[52px] opacity-100' : 'h-0 opacity-0',
        )}
      >
        <span className={cn('text-[#0D0D12] font-bold')}>Enter verification code</span>
        <div className={cn('text-[#353849]')}>
          Enter the code sent to <span className='font-medium'>{emailAddress}</span> to use your saved information.
        </div>
      </div>
    </div>
  </div>
)

// Exports:
export default OTPSection
