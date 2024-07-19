// import { Image, StyleSheet, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link, router } from 'expo-router';
import { StyledScrollView, StyledView, StyledButton, StyledModal, StyledPressable, StyledLinearGradient, StyledTextInput, StyledLink, StyledTouchableOpacity } from '@/constants/StyledComps';
import { ThemedText } from '@/components/ThemedText';
import Header from '@/components/Header';

import { Ionicons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Container from '@/components/Container';
import Card, { MiniCard } from '@/components/Card';


export default function EtapaZero() {


  return (
    <StyledScrollView className='flex bg-white'>
    <StyledLinearGradient 
      colors={['#28CD2E', '#1FB298']}
      locations={[ 0.1, 0.9 ]}
      className='absolute top-[0] left-[0] right-[0] h-[160px] shadow-xl shadow-slate-950'
    />
      <StatusBar style='auto' />
      <StyledView className='flex flex-col gap-[20px] p-[50px] pl-[45px]'>
        <Header title='Etapa 1' />


        <StyledView>
          {/* DESCRIÇÃO */}
          <ThemedText>
            A 1ª etapa do Strategic Canvas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi deserunt explicabo cum. Soluta perspiciatis animi laborum alias incidunt quas quos expedita enim, mollitia impedit eaque voluptatum aliquid iste doloremque! Tempore.
          </ThemedText>

          {/* VALORES */}
          <ThemedText>
            Valores
          </ThemedText>
          <ThemedText>
            Os valores de um organização dizem respeito a Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit esse, harum eveniet id neque quia. Quas consequatur, laboriosam est commodi ea, totam odio repudiandae, explicabo asperiores necessitatibus voluptas aliquam adipisci.
          </ThemedText>
          <Container>
            <StyledTouchableOpacity>
              <StyledTextInput

              />
              <StyledTextInput

              />
            </StyledTouchableOpacity>

            <Card>
              {}
              <MiniCard>

              </MiniCard>
              
            </Card>
          </Container>

        </StyledView>


      </StyledView>
    </StyledScrollView>
  );
}