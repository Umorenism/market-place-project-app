import { View} from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { StatusBar } from 'expo-status-bar';
import RootNavigation from './src/screens/navigation/RootNavigation';
// import { AuthProvider } from './AuthProvider';

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
        {/* <AuthProvider> */}
      <RootNavigation/>
      {/* </AuthProvider> */}
    </Container>
  )
}

const Container = styled(View)`
flex:1
`