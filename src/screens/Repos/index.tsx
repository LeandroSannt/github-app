import React from 'react';
import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useQuery } from 'react-query';

import { Container, Title } from '../../../styles';
import { Header } from '../../components/Header/Header';
import Item from '../../components/Item';
import { useFavorite } from '../../hooks/useFavorites';
import { IRepos } from '../../interface/user';
import { api } from '../../services/api';
import { ListUsers } from '../Favorites/styles';
import { BgIconFavorite, Favorites } from './styles';

const Repos:React.FC = ({route}:any) =>{
 const {avatar_url, id,login,repos_url} = route.params
 const {addFavorite} = useFavorite()

 const {data:repos ,isLoading} = useQuery<IRepos[]>(['repos',repos_url], async () =>{
  if(repos_url){
    const response = await api.get(`${repos_url}`)
    return response.data
  }
})
 
 const renderItem = (props:any) => {
  return(
    <Item repo={props.item} key={props.item.id} typePage={'repo'}/>
  )
}

const AddFavoriteUser = async () =>{
  const user = {
    avatar_url,
    id,
    login,
    repos_url
  }
 await addFavorite(user)
}

  return(
    <>
      <Header/>
      <Container>
        <Favorites>
          <Title style={{marginBottom:0}}>Favoritar {login} ?</Title>
          <BgIconFavorite onPress={AddFavoriteUser}>
            <Icon name="heart" size={24} color="rgba(245, 66, 66,0.6)" />
          </BgIconFavorite>
        </Favorites>
        <View style={{maxWidth:320,height:'90%'}}>
          {isLoading ? 
            <Spinner
            visible={isLoading}
            textContent={'Carregando...'}
          />
          :
          <ListUsers
          showsVerticalScrollIndicator={false}
          data={repos}
          renderItem={renderItem}
          keyExtractor={(item: { id: { toString: () => number; }; }) => item?.id.toString()}
          />
          }
        </View>
      </Container>
    </>
  )
}

export default Repos