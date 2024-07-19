import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'
import { StyledTouchableOpacity, StyledTextInput } from '@/constants/StyledComps'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'


type InputSCProps = {
  value: string
  onChangeText: (value: string) => void
  onPress: () => void
  impact?: number
  effort?: number
  placeholder?: string
  className?: string
}
export default function InputSC({
  value,
  onChangeText,
  onPress,
  impact,
  effort,
  placeholder,
  className
}: InputSCProps) {
  
  if (impact || effort) {
    return (
      <ThemedView className='flex p-[4px] gap-[8px] bg-zinc-100 rounded-lg shadow-lg'>
        <ThemedText className='flex flex-row w-full'>
          <StyledTextInput
            editable
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder || 'Resposta...'}
            className={`flex-grow p-[4px] text-slate-950 ${className}`}
          />
        </ThemedText>

        <ThemedText className='flex flex-row w-full'>
          <StyledTextInput
            editable
            keyboardType='numeric'
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder || '1-5'}
            className={`appearance-none flex-grow p-[4px] text-slate-950 ${className}`}
          />
          <StyledTextInput
            editable
            keyboardType='numeric'
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder || '1-5'}
            className={`appearance-none flex-grow p-[4px] text-slate-950 ${className}`}
          />
          <StyledTouchableOpacity onPress={onPress}>
            <Ionicons
              name='add-circle'
              size={20}
              color='black'
            />
          </StyledTouchableOpacity>
        </ThemedText>
      </ThemedView>
    )

  } else {
    return (
      <ThemedView className='flex flex-row p-[4px] bg-zinc-100 rounded-lg shadow-lg'>
        <StyledTextInput
          editable
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder || 'Resposta...'}
          className={`flex-grow p-[4px] text-slate-950 ${className}`}
        />
        <StyledTouchableOpacity onPress={onPress}>
          <Ionicons
            name='add-circle'
            size={20}
            color='black'
          />
        </StyledTouchableOpacity>
      </ThemedView>
    )
  }
}