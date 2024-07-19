// import { Image, StyleSheet, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Link, router } from 'expo-router';
import { styled } from 'nativewind';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '@/components/ThemedText';
import { Collapsible } from '@/components/Collapsible';

import { Ionicons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


const StyledScrollView = styled(ScrollView)
const StyledView = styled(View)
const StyledLinearGradient = styled(LinearGradient)
const StyledLink = styled(Link)
const StyledFlatList = styled(FlatList)

const links = [
  {
    id: '1',
    title: 'Etapa 1: Definição da Identidade Organizacional',
    screen: 'EtapaUm',
  },
  {
    id: '2',
    title: 'Etapa 2: Análise do Ambiente (interno e externo) da empresa',
    screen: 'EtapaDois',
  },
  {
    id: '3',
    title: 'Etapa 3: Definição das Estratégia, Objetivos e Metas',
    screen: 'EtapaTres',
  },
  {
    id: '4',
    title: 'Etapa 4: Implementação e Monitoramento do que foi definido no Planejamento Estratégico',
    screen: 'StrategicCanvas/EtapaQuatro',
  },
]


export default function EtapaZero() {
  // const renderItem = ({ item }) => (
  //   <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(item.screen)}>
  //     <Text style={styles.title}>{item.title}</Text>
  //   </TouchableOpacity>
  // );

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

        <ThemedText type='h1' className='text-slate-100 text-center font-[900]'>
          SCANVAS
        </ThemedText>


        <View>
          <StyledLinearGradient
            colors={['rgb(248, 250, 252)', 'rgb(203 213 225)']}
            locations={[0.6, 1]}
            className='self-start flex flex-col w-full p-[24px] backdrop-blur-xl rounded-lg shadow-xl shadow-slate-950'
            >
            {/* TITULO */}
            <ThemedText type='h1' className='text-emerald-400 text-center'>
              Introdução
            </ThemedText>

          </StyledLinearGradient>
        </View>


        <View>
          {/* DESCRIÇÃO */}
          <ThemedText>
            O Strategic Canvas é uma ferramenta de estratégia que tem como objetivo ajudar a empresa a visualizar e comparar o seu posicionamento no mercado em relação aos seus concorrentes. A ferramenta foi criada por W. Chan Kim e Renée Mauborgne, autores do livro “A Estratégia do Oceano Azul”.
          </ThemedText>

          <ThemedText>
            O SCANVAS é essencialmente composto por 4 etapas:
            {/* <StyledFlatList
                data={links}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            /> */}
          </ThemedText>
          
          <ThemedText>
            No final do processo, a empresa terá um mapa visual do seu planejamento estratégico como o exemplo abaixo:
          </ThemedText>

          <ThemedText>
            Imagem
          </ThemedText>

          {/* CARDS */}
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
