import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { Container, Title } from '../../../styles';
import { Header } from '../../components/Header/Header';
import { InputFilter } from '../../components/Input';
import Item from '../../components/Item';
import { IUser } from '../../interface/user';
import { api } from '../../services/api';
import { BlackContainer, BlankMessage, Content, ListUsers, Octocat } from './styles';

const List:React.FC = () =>{
  const [users, setUsers] = useState<IUser[]>([])

  const {data:userss} = useQuery<IUser[]>(['users',users], async () =>{
    return users
})
 
  const getUsers = async (user:string) =>{
    if(!user){
      setUsers([])
      return
    }
   const response = await api.get(`search/users?q=${user}`)
   setUsers(response.data.items)
  }

  const renderItem = (props:any) => {
    return(
      <Item user={props.item} key={props.item.id} typePage={'home'}      />
    )
  }

  return(
    <>
      <Header/>
      <Container>
        <InputFilter getUser={getUsers} />
        <Content>
          {!!userss?.length ? 
          <>
          <Title>Usuários encontrados </Title>
          <ListUsers
          showsVerticalScrollIndicator={false}
          data={userss}
          renderItem={renderItem}
          keyExtractor={(item: { id: { toString: () => number; }; }) => item?.id.toString()}
          />
          </>
          :
          <BlackContainer>
            <Octocat source={require('../../../assets/Octocat.png')} />
            <BlankMessage>Esta meio vazio por aqui! Busque por um usuário</BlankMessage>
          </BlackContainer>
        }

        </Content>
      </Container>
    </>
  )
}

export default List