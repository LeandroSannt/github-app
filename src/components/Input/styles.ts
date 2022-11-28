import styled from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView `
  width: 100%;
  height: 60px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Input = styled.TextInput`
  display: flex;
  flex: 1;
  border-radius: 10px;
  background-color: #Fff;
  padding: 10px;
  color: #6E6E6E;
  border: gray solid 1px;
`

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #2980B9;
  width: 80px;
  margin-left: 8px;
`

export const Add = styled.Text`
  color: #fff;
`
