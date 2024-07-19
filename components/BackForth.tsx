import { StyledTouchableOpacity, StyledIonicons } from '@/constants/StyledComps'
import { useThemeColor } from '@/hooks/useThemeColor'
import { Colors } from '@/constants/Colors'
import { useNavigation } from 'expo-router'


type BackwardProps = {
  onPress?: () => void
  className?: string
}
type ForwardProps = {
  onPress: () => void
  className?: string
}


export function Backward({
  onPress,
  className
}: BackwardProps) {
  const color = useThemeColor({ light: Colors.light.icon, dark: Colors.dark.icon }, 'text')
  const navigation = useNavigation()
  const destination = onPress ? onPress : () => navigation.goBack()

  return (
    <StyledTouchableOpacity onPress={destination} className={className}>
      <StyledIonicons
        name='chevron-back'
        size={24}
        color={color}
      />
    </StyledTouchableOpacity>
  )
}


export function Forward({
  onPress,
  className
}: ForwardProps) {
  const color = useThemeColor({ light: Colors.light.icon, dark: Colors.dark.icon }, 'text')

  return (
    <StyledTouchableOpacity onPress={onPress} className={className}>
      <StyledIonicons
        name='chevron-forward'
        size={24}
        color={color}
      />
    </StyledTouchableOpacity>
  )
}