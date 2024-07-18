import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { useColorScheme } from 'react-native';
import { StyledLinearGradient, StyledTouchableOpacity  } from '@/constants/StyledComps';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';


export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView className='rounded-lg'>
      <StyledLinearGradient
        colors={['#28CD2E', '#1FB298']}
        locations={[0.1, 1]}
        className='flex flex-col p-[24px] backdrop-blur-xl rounded-lg shadow-xl shadow-slate-950'
      >
        
      <StyledTouchableOpacity
        className='flex flex-row items-center gap-[6px]'
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={24}
          color={Colors.iconWhite.icon}
        />
        <ThemedText type="subtitle" white className='text-white'>{title}</ThemedText>
      </StyledTouchableOpacity>
      {isOpen && <ThemedView className='flex gap-[20px] mt-[20px] ml-[24px] text-white'>{children}</ThemedView>}

      </StyledLinearGradient>
    </ThemedView>
  );
}