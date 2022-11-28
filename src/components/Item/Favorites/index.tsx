import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useFavorite } from '../../../hooks/useFavorites';
import { IUser } from '../../../interface/user';
import { Avatar, Container, Name, PhotoDescription } from './styles';

interface IUserProps{
  user:IUser | undefined
}

const Favorite:React.FC<IUserProps> = ({user}) =>{
  const {removeFavorite} = useFavorite()

  return(
    <Container>
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
      <Icon onPress={() =>removeFavorite(user?.id)}  name="trash-o" size={26} color="red" />
    </Container>

  )
}
export { Favorite };

