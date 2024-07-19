import { StyledView, StyledLinearGradient } from '@/constants/StyledComps'
import { PropsWithChildren } from 'react'

type ContainerProps = PropsWithChildren<{
  className?: string
  bgFrom?: string
  bgTo?: string
}>
export default function Container({
  children,
  className,
  bgFrom = '#28CD2E',
  bgTo = '#1FB298',
}: ContainerProps) {
  return (
    <StyledView className={`flex flex-col p-[8px] gap-[8px] rounded-lg shadow-lg ${className}`}>
      <StyledLinearGradient
        colors={[ bgFrom, bgTo ]}
        locations={[0.1, 1]}
        className='flex flex-col p-[24px] backdrop-blur-xl rounded-lg shadow-xl shadow-slate-950'
      >
        {children}
      </StyledLinearGradient>
    </StyledView>
  )
}
