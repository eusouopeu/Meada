import { StyledView, StyledButton, StyledTextInput, StyledLinearGradient } from '@/constants/StyledComps'
import { ThemedText } from './ThemedText'
import { PropsWithChildren } from 'react'

type ContainerProps = PropsWithChildren<{ className?: string }>
export default function Container({ children, className }: PropsWithChildren & { className?: string }) {
  return (
    <StyledView className={`flex flex-col p-[8px] gap-[8px] rounded-lg shadow-lg ${className}`}>
      <StyledLinearGradient
        colors={['#28CD2E', '#1FB298']}
        locations={[0.1, 1]}
        className='flex flex-col p-[24px] backdrop-blur-xl rounded-lg shadow-xl shadow-slate-950'
      >

        {children}

      </StyledLinearGradient>
    </StyledView>
  )
}
