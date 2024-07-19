// import { Image, StyleSheet, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Link, router } from 'expo-router';
import { styled } from 'nativewind';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '@/components/ThemedText';
import { Collapsible } from '@/components/Collapsible';

import { Ionicons } from '@expo/vector-icons';

const StyledScrollView = styled(ScrollView)
const StyledView = styled(View)
const StyledLinearGradient = styled(LinearGradient)
const StyledLink = styled(Link)

export default function HomeScreen() {
  return (
    <StyledScrollView style={styles.scrollview}>
    <StyledLinearGradient 
      colors={['#28CD2E', '#1FB298']}
      locations={[ 0.1, 0.9 ]}
      style={styles.background}
      className='shadow-xl shadow-slate-950'
    />
      <StatusBar style='auto' />
      <View className='flex flex-col gap-[20px] p-[50px] pl-[45px]'>


        <ThemedText type='h1' className='text-slate-100 text-center font-[900]'>Meada</ThemedText>

        <View>
          <StyledLinearGradient
            colors={['rgb(248, 250, 252)', 'rgb(203 213 225)']}
            locations={[0.6, 1]}
            className='self-start flex flex-col w-full p-[24px] backdrop-blur-xl rounded-lg shadow-xl shadow-slate-950'
          >
            <ThemedText type='h1' className='text-emerald-400 text-center'>Percurso</ThemedText>
          </StyledLinearGradient>
        </View>

        {/* CARDS */}
        <View>
          <Collapsible title='Strategic Canvas'>
            <StyledLink href={{ pathname: '/[tools]', params: { tools: 'ValoresVisaoeMissao' } }} className='flex flex-row content-baseline'>
              <Ionicons name='reader' size={18} color={'#fff'} />
              <ThemedText> Valores, Visão e Missão</ThemedText>
            </StyledLink>
            <StyledLink href={'./'} className='flex flex-row'>
              <Ionicons name='reader' size={20} color={'#fff'} />
              <ThemedText> Matriz SPOT</ThemedText>
            </StyledLink>
            <StyledLink href={'./'} className='flex flex-row'>
              <Ionicons name='reader' size={20} color={'#fff'} />
              <ThemedText> Balanced ScoreCard</ThemedText>
            </StyledLink>
            <StyledLink href={'./'} className='flex flex-row'>
              <Ionicons name='reader' size={20} color={'#fff'} />
              <ThemedText> OKRs</ThemedText>
            </StyledLink>
            <StyledLink href={'./'} className='flex flex-row items-center'>
              <Ionicons name='reader' size={20} color={'#fff'} />
              <ThemedText> Monitoramento e Gestão</ThemedText>
            </StyledLink>
          </Collapsible>
        </View>
        <StyledLinearGradient
          colors={['rgb(248, 250, 252)', 'rgb(203 213 225)']}
          locations={[0.6, 1]}
          className='flex flex-col w-fit p-[24px] backdrop-blur-xl rounded-lg shadow-xl shadow-slate-950'
        >
          <ThemedText type='h1' className='text-emerald-400 text-center font-[900]'>Ferramentas</ThemedText>
        </StyledLinearGradient>
        <StyledLinearGradient
          colors={['rgb(248, 250, 252)', 'rgb(203 213 225)']}
          locations={[0.6, 1]}
          className='flex flex-col w-fit p-[24px] backdrop-blur-xl rounded-lg shadow-xl shadow-slate-950'
        >
          <ThemedText type='h1' className='text-emerald-400 text-center font-[900]'>Ferramentas</ThemedText>
        </StyledLinearGradient>


      </View>
    </StyledScrollView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 160,
  },
})

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
