import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';

import { IUser } from '../interface/user';

interface FavoritesContextData{
  favorites:IUser[]
  addFavorite(user:IUser):Promise<void>
  removeFavorite(id:number | undefined):Promise<void>
}

interface Props{
  children:JSX.Element[] | JSX.Element
}

const ToastContext = createContext<FavoritesContextData>({} as FavoritesContextData)

const FavoritesProvider = ({children}:Props) =>{
  const [favorites,setFavorites] = useState<IUser[]>([])


  useEffect(() =>{
    const value = AsyncStorage.getItem('@favoritesUser1')
    .then((user) =>{
      if(user){
        const users:IUser[] = JSON.parse(user)
        setFavorites(users)
      }
    })
  },[])
  
  const addFavorite = useCallback(async(user:IUser) =>{
    //pegar os usuarios que ja estao no localstorage
    const value = await AsyncStorage.getItem('@favoritesUser1')

    //se tiver adiciona os que ja adiciona os que tem mais o novo
    if(value && value?.length > 0){
      const oldFavorites = JSON.parse(value)
      const hasUser = oldFavorites.find((favorite:any) =>{return favorite.id === user.id})

      //se esse usuario ja estiver nos favoritos ele nao vai poder ser adicionado
      if(hasUser) {
        Toast.show({
          type: 'info',
          text1: 'Usuário já adicionado',
          text2: `O usuário ${hasUser.login} ja esta na sua lista de favoritos`
        });
        return
      }
  
      const jsonValue = JSON.stringify([user,...oldFavorites])
      await AsyncStorage.setItem('@favoritesUser1',jsonValue)

      setFavorites(JSON.parse(jsonValue))
      //se nao so adiciona esse usuario
    }else{
      const jsonValue = JSON.stringify([user])
      await AsyncStorage.setItem('@favoritesUser1',jsonValue)
      setFavorites(JSON.parse(jsonValue))
    }

    Toast.show({
      type: 'success',
      text1: 'Usuário adicionado',
      text2: `Confira sua lista de favoritos 👋`
    });

  },[])

  const removeFavorite = useCallback( async (id:number | undefined) =>{
    const favoritesStore = await AsyncStorage.getItem('@favoritesUser1')

    if(favoritesStore){
      const jsonFavorites:IUser[] = JSON.parse(favoritesStore)

      const findedFavorites = jsonFavorites.filter((favorite) =>{
        return favorite.id !== id
      })
      const jsonValue = JSON.stringify(findedFavorites)
      await AsyncStorage.setItem('@favoritesUser1',jsonValue)

      setFavorites(findedFavorites)
    }
  },[])
 
  return(
    <ToastContext.Provider value ={{favorites,addFavorite,removeFavorite}}>
      {children}
      <Toast />
    </ToastContext.Provider>
  )
}

function useFavorite() {
  const context = useContext(ToastContext)

  if(!context){
    throw new Error('useToast must be used FavoritesProvider')
  }

  return context
}

export { FavoritesProvider, useFavorite };

