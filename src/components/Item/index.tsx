import React, { memo } from 'react';

import { IRepos, IUser } from '../../interface/user';
import { Favorite } from './Favorites';
import { Repo } from './Repo';
import { Container } from './styles';
import { User } from './User';

interface ContainerPageProps{
  typePage:'home' | 'repo' | 'favorite'
  user?:IUser
  repo?:IRepos
  favorite?:IUser
}

  const Component = ({typePage,repo,user}:ContainerPageProps) =>{
    const typesComp = {
      home:() =><User user={user}  />,
      repo:() => <Repo repo={repo} />,
      favorite:() => <Favorite  user={user}/>,
    }

    return typesComp[typePage]()
  }

const Item:React.FC<ContainerPageProps> = ({typePage,user,repo}) =>{
  return(
    <Container >
      <Component typePage={typePage} favorite={user} repo={repo} user={user}/>
    </Container>
  )
}
export default memo(Item) ;

