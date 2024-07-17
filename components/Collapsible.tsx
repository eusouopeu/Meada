import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { styled } from 'nativewind';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

const StyledLinearGradient = styled(LinearGradient);

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView className='rounded-lg w-full'>
      <StyledLinearGradient
        colors={['#28CD2E', '#1FB298']}
        locations={[0.6, 1]}
        className='flex flex-col p-[24px] backdrop-blur-xl rounded-lg shadow-xl shadow-slate-950'
      >
        
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
        />
        <ThemedText type="subtitle">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}

      </StyledLinearGradient>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
