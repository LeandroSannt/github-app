import Constants from 'expo-constants';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container } from './styles';

export function Header() {
  
  return (
    <Container
     heightStatus={Constants.statusBarHeight?.toFixed(0)}>
      <Icon  name="github" style={{marginBottom:20, marginRight:20}}  size={180} color="gray" />
    </Container>
  )
}

