import styled from 'styled-components/native';

export const Content = styled.SafeAreaView`
display: flex;
justify-content: space-between;
flex-direction: column;
height: 84%;
width: 100%;
margin:50px 0 ;
`

export const Create = styled.View`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`

export const Input = styled.TextInput`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  position: fixed;
`
export const ListUsers = styled.FlatList`
  flex: 1;
  width: 100%;
`

export const BlackContainer = styled.View`

width: 60%;
margin: 0  auto;

`

export const BlankMessage = styled.Text`
margin-top: 20px;
font-size: 12px;
color: #6E6E6E;
text-align: center;
width: 100%;
`

export const Octocat = styled.Image`
  width: 100%;
  height: 200px;
`