import React from 'react';

import { Container, Title } from '../../../styles';
import { Header } from '../../components/Header/Header';
import Item from '../../components/Item';
import { useFavorite } from '../../hooks/useFavorites';
import { ListUsers } from './styles';

const Favorites:React.FC = () =>{
  const {favorites} = useFavorite()

  const renderItem = (props:any) => {
    return(
      <Item  user={props.item} key={props.item.id} typePage={'favorite'}      />
    )
  }
  return(
    <>
      <Header/>
      <Container>
        <Title style={{width:'100%'}}>Meus Favoritos </Title>
        <ListUsers
        showsVerticalScrollIndicator={false}
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item: { id: { toString: () => number; }; }) => item?.id.toString()}
        />
      </Container>
    </>
  )
}

export default Favorites