// import { Image, StyleSheet, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { styled } from 'nativewind';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '@/components/ThemedText';
import { Collapsible } from '@/components/Collapsible';


const StyledScrollView = styled(ScrollView)
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
      <View className='flex flex-col gap-[20px] p-[50px]'>


      <ThemedText type='title' className='text-slate-100 text-center font-[900]'>Meada</ThemedText>

      <StyledLinearGradient
        colors={['rgb(248, 250, 252)', 'rgb(203 213 225)']}
        locations={[0.6, 1]}
        className='self-start flex flex-col w-full p-[24px] backdrop-blur-xl rounded-lg shadow-xl shadow-slate-950'
      >
        <ThemedText type='title' className='text-emerald-400 text-center font-[900]'>Ferramentas</ThemedText>
      </StyledLinearGradient>

      {/* CARDS */}
      <Collapsible title='Strategic Canvas'>
        <ThemedText type='title' className='text-center font-[900]'>Ferramentas</ThemedText>
      </Collapsible>
      <StyledLinearGradient
        colors={['rgb(248, 250, 252)', 'rgb(203 213 225)']}
        locations={[0.6, 1]}
        className='flex flex-col w-fit p-[24px] backdrop-blur-xl rounded-lg shadow-xl shadow-slate-950'
      >
        <ThemedText type='title' className='text-emerald-400 text-center font-[900]'>Ferramentas</ThemedText>
      </StyledLinearGradient>
      <StyledLinearGradient
        colors={['rgb(248, 250, 252)', 'rgb(203 213 225)']}
        locations={[0.6, 1]}
        className='flex flex-col w-fit p-[24px] backdrop-blur-xl rounded-lg shadow-xl shadow-slate-950'
      >
        <ThemedText type='title' className='text-emerald-400 text-center font-[900]'>Ferramentas</ThemedText>
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
  typo: {
    lineHeight: 32,
    textAlign: 'center'
  }
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
