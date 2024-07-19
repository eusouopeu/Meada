import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'
import { StyledLinearGradient } from '@/constants/StyledComps'
import React from 'react'


type HeaderProps = {
  title: string
  className?: string
  bgFrom?: string
  bgTo?: string
}
export default function Header({
  title,
  className,
  bgFrom = 'rgb(248, 250, 252)',
  bgTo = 'rgb(203 213 225)',
}: HeaderProps) {
  return (
    <ThemedView>
      <ThemedText type='h1' className={`text-slate-100 text-center font-[900] mb-[20px] ${className}`}>
          Beasy
        </ThemedText>


        <ThemedView>
          <StyledLinearGradient
            colors={[ bgFrom, bgTo ]}
            locations={[0.6, 1]}
            className='self-start flex flex-col w-full p-[24px] backdrop-blur-xl rounded-lg shadow-xl shadow-slate-950'
            >
            {/* TITULO */}
            <ThemedText type='h1' className='text-emerald-400 text-center'>
              {title}
            </ThemedText>
          </StyledLinearGradient>
        </ThemedView>
    </ThemedView>
  )
}