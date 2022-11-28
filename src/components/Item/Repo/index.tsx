import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import { IRepos } from '../../../interface/user'
import { Container, Description, Title, TitleDescription } from './styles'

interface IRepoProps{
  repo:IRepos | undefined
}

const Repo:React.FC<IRepoProps> = ({repo}) =>{
  return(
    <Container>
      
      <Icon  name="folder" size={60} color="#7EB6FF" />
      <TitleDescription>
        <Title numberOfLines={1}>
          {repo?.name}
        </Title>
        {repo?.description && 
        <Description numberOfLines={2}>
          {repo.description}
        </Description>
        }
      </TitleDescription>
    </Container>
  )
}
export { Repo }

