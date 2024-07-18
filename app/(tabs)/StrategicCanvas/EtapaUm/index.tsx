// import { Image, StyleSheet, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link, router } from 'expo-router';
import { StyledScrollView, StyledView, StyledButton, StyledModal, StyledPressable, StyledLinearGradient, StyledTextInput, StyledLink } from '@/constants/StyledComps';
import { ThemedText } from '@/components/ThemedText';
import { Collapsible } from '@/components/Collapsible';


import { Ionicons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Container from '@/components/Container';
import Card from '@/components/Card';


export default function EtapaZero() {

  return (
    <StyledScrollView style={styles.scrollview}>
    <StyledLinearGradient 
      colors={['#28CD2E', '#1FB298']}
      locations={[ 0.1, 0.9 ]}
      style={styles.background}
      className='shadow-xl shadow-slate-950'
    />
      <StatusBar style='auto' />
      <StyledView className='flex flex-col gap-[20px] p-[50px] pl-[45px]'>

        <ThemedText type='title' className='text-slate-100 text-center font-[900]'>
          SCANVAS
        </ThemedText>


        <StyledView>
          <StyledLinearGradient
            colors={['rgb(248, 250, 252)', 'rgb(203 213 225)']}
            locations={[0.6, 1]}
            className='self-start flex flex-col w-full p-[24px] backdrop-blur-xl rounded-lg shadow-xl shadow-slate-950'
            >
            {/* TITULO */}
            <ThemedText type='title' className='text-emerald-400 text-center'>
              Etapa 1
            </ThemedText>

          </StyledLinearGradient>
        </StyledView>


        <StyledView>
          {/* DESCRIÇÃO */}
          <ThemedText>
            A 1ª etapa do Strategic Canvas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi deserunt explicabo cum. Soluta perspiciatis animi laborum alias incidunt quas quos expedita enim, mollitia impedit eaque voluptatum aliquid iste doloremque! Tempore.
          </ThemedText>

          <Container>
            <ThemedText>
              Valores
            </ThemedText>

            <ThemedText>
              Os valores de um organização dizem respeito a Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit esse, harum eveniet id neque quia. Quas consequatur, laboriosam est commodi ea, totam odio repudiandae, explicabo asperiores necessitatibus voluptas aliquam adipisci.
            </ThemedText>

            <Card>
              <StyledTextInput

              />
            </Card>
          </Container>

          {/* VALORES */}

          <StyledView>
            <ThemedText>
              Valores
            </ThemedText>

            <ThemedText>
              O SCANVAS é essencialmente composto por 4 etapas:
            </ThemedText>

            <StyledView>
              <StyledView></StyledView>
            </StyledView>
          </StyledView>
          
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
              <ThemedText type='defaultBold' white> Valores, Visão e Missão</ThemedText>
            </StyledLink>
            <StyledLink href={'./'} className='flex flex-row'>
              <Ionicons name='reader' size={20} color={'#fff'} />
              <ThemedText type='defaultBold' white> Matriz SPOT</ThemedText>
            </StyledLink>
            <StyledLink href={'./'} className='flex flex-row'>
              <Ionicons name='reader' size={20} color={'#fff'} />
              <ThemedText type='defaultBold' white> Balanced ScoreCard</ThemedText>
            </StyledLink>
            <StyledLink href={'./'} className='flex flex-row'>
              <Ionicons name='reader' size={20} color={'#fff'} />
              <ThemedText type='defaultBold' white> OKRs</ThemedText>
            </StyledLink>
            <StyledLink href={'./'} className='flex flex-row items-center'>
              <Ionicons name='reader' size={20} color={'#fff'} />
              <ThemedText type='defaultBold' white> Monitoramento e Gestão</ThemedText>
            </StyledLink>
          </Collapsible>
        </StyledView>


      </StyledView>
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