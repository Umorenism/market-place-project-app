import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';

type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

type GoogleAuthScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Auth'
>;

export default function GoogleAuthScreen() {
  const navigation = useNavigation<GoogleAuthScreenNavigationProp>();

  const handleSignup = () => {
    console.log('User signed in ✅');
    navigation.navigate('Main');
  };

  return (
    <Container>
      <Content>
        <Logo source={require('../../../assets/images/icon.png')} resizeMode="contain" />
        <Title>Welcome to Our App</Title>
        <GoogleButton onPress={handleSignup}>
          <AntDesign name="google" size={24} color="#fff" />
          <ButtonText>Sign in with Google</ButtonText>
        </GoogleButton>
      </Content>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

const Content = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
}))``;

const Logo = styled.Image`
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
`;

const GoogleButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  background-color: #4285f4;
  padding: 12px 20px;
  border-radius: 6px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
`;
