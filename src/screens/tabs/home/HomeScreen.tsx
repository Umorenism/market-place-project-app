import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen() {
  return (
    <GradientBackground colors={['#a18cd1', '#fbc2eb']}>
      <StyledSafeArea>
        <Content>
          <Title>Welcome to Home</Title>
          <Subtitle>HomeScreen peop</Subtitle>
        </Content>
      </StyledSafeArea>
    </GradientBackground>
  );
}

// Styled Components
const GradientBackground = styled(LinearGradient)`
  flex: 1;
`;

const StyledSafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 10px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  color: #f0f0f0;
`;
