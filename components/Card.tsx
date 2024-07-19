import { StyledLinearGradient, StyledButton, StyledTextInput, StyledPressable, StyledLink, StyledView} from '@/constants/StyledComps'
import { ThemedView } from './ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { PropsWithChildren } from 'react'


type CardProps = PropsWithChildren<{ 
  className?: string
  bgFrom?: string
  bgTo?: string
  onPress?: () => void
  href?: string
}>
export default function Card({
  className,
  bgFrom = '#fff',
  bgTo = '#1FB298',
  onPress,
  href,
  children,
}: CardProps) {

  if (onPress) {
    return (
      <StyledPressable onPress={onPress} className={`flex flex-col p-[4px] rounded-lg shadow-lg ${className}`}>
        <StyledLinearGradient
          colors={[`${bgFrom}`, `${bgTo}`]}
          locations={[0.8, 1]}
          className='flex flex-col p-[24px] backdrop-blur-xl rounded-lg shadow-xl shadow-slate-950'
        >
          {children}
        </StyledLinearGradient>
      </StyledPressable>
    )

  } else if (href) {
    return (
      <StyledLink className={`flex flex-col p-[4px] rounded-lg shadow-lg ${className}`} href={href}>
        <StyledLinearGradient
          colors={[`${bgFrom}`, `${bgTo}`]}
          locations={[0.8, 1]}
          className='flex flex-col p-[24px] backdrop-blur-xl rounded-lg shadow-xl shadow-slate-950'
        >
          {children}
        </StyledLinearGradient>
      </StyledLink>
    )

  } else {
    return (
      <ThemedView className={`flex flex-col p-[4px] rounded-lg shadow-lg ${className}`}>
        <StyledLinearGradient
          colors={[`${bgFrom}`, `${bgTo}`]}
          locations={[0.8, 1]}
          className='flex flex-col p-[24px] backdrop-blur-xl rounded-lg shadow-xl shadow-slate-950'
        >
          {children}
        </StyledLinearGradient>
      </ThemedView>
    )
  }
}

type MiniCardProps = PropsWithChildren<{
  className?: string
  bgFrom?: string
  bgTo?: string
}>
export function MiniCard({
  className,
  bgFrom = '#28CD2E',
  bgTo = '#1FB298',
  children,
}: MiniCardProps) {
  return (
    <StyledView className={`flex w-full h-[18%] rounded-lg shadow-lg, ${className}`}>
      <StyledLinearGradient
        colors={[bgFrom, bgTo]}
        locations={[0.1, 1]}
        className='flex flex-col p-[24px] backdrop-blur-xl rounded-lg shadow-xl shadow-slate-950'
      >
        <ThemedText className='text-xs overflow-hidden'>{children}</ThemedText>
      </StyledLinearGradient>
    </StyledView>
  )
}