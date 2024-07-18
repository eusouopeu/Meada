import { StyledTouchableOpacity } from '@/constants/StyledComps'
import { Ionicons } from '@expo/vector-icons'
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
      <Ionicons
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
      <Ionicons
        name='chevron-back'
        size={24}
        color={color}
      />
    </StyledTouchableOpacity>
  )
}