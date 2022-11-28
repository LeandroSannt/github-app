import styled from 'styled-components/native'

export const Container = styled.View`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center ;

`
export const TitleDescription = styled.View`
display: flex;
flex-direction: column;
margin-left: 40px;

`

export const Title = styled.Text`
  color:#040404;
  margin-bottom: 3px;
  font-size: 12px;
  width: 180px;
`

export const Description = styled.Text`
  color:#D6D6D6;
  font-size: 10px;
  width: 180px;

`
