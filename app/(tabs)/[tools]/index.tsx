// import { ScrollView, View, StyleSheet } from 'react-native'
// import { useLocalSearchParams } from 'expo-router'
// import { ThemedText } from '@/components/ThemedText'
// import { ThemedView } from '@/components/ThemedView'

// import { StatusBar } from 'expo-status-bar'
// import { LinearGradient } from 'expo-linear-gradient'
// import { styled } from 'nativewind'

// import { toolsList } from '@/lib/tools'


// const StyledView = styled(View)
// const StyledLinearGradient = styled(LinearGradient)


// export default function Tools() {
//   const { tool } = useLocalSearchParams()

//   return (
//       <ScrollView style={styles.scrollview}>
//       <StyledLinearGradient 
//       colors={['#28CD2E', '#1FB298']}
//       locations={[ 0.1, 0.9 ]}
//       style={styles.background}
//       className='shadow-xl shadow-slate-950'
//     />
//       <StatusBar style='auto' />

//         <ThemedText> {tools.tool} </ThemedText>

//         <StyledView>



//         </StyledView>
//       </ScrollView>
//   )
// }

// const styles = StyleSheet.create({
//   scrollview: {
//     display: 'flex',
//     flexDirection: 'column',
//     backgroundColor: '#FFFFFF',
//   },
//   background: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     height: 160,
//   },
// })