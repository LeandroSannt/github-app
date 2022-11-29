import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Add, Button, Container, Input } from './styles';

interface InputProps{
  getUser:(value:string)  => Promise<void>     
}

export function InputFilter({getUser}:InputProps) {
  const [user, setUser] = useState('');
  async function handleSearchUser() {
    getUser(user)
    Keyboard.dismiss()
  }

  return (
    <Container>
      <Input 
        placeholder="Buscar Usúario"
        placeholderTextColor="#B2B2B2"
        returnKeyType="send"
        selectionColor="#666666"
        value={user}
        onChangeText={setUser}
        onSubmitEditing={handleSearchUser}
      />
      <Button
        testID="add-new-task-button"
        activeOpacity={0.7}
        onPress={handleSearchUser}
      >
        <Add>
          <Icon  name="search" size={24} color="#fff" />
        </Add>
      </Button>
    </Container>
  )
}

