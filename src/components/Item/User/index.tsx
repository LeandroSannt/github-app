import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { IUser } from '../../../interface/user';
import { Avatar, Container, Name, PhotoDescription } from './styles';

interface IUserProps{
  user:IUser | undefined
}

const User:React.FC<IUserProps> = ({user}) =>{
  
  const navigation = useNavigation<any>()
  return(
    <Container onPress={() =>{navigation.navigate('Repo' , {
    login:user?.login,
    avatar_url:user?.avatar_url,
    id:user?.id,
    repos_url:user?.repos_url
    })}}>
      <PhotoDescription>
        <Avatar
          source={{
            uri: user?.avatar_url,
          }}
        />
        <Name>
          {user?.login}
        </Name>
      </PhotoDescription>
      <Icon  name="chevron-right" size={16} color="gray" />
    </Container>

  )
}
export { User };

