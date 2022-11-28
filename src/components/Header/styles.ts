import styled from 'styled-components/native'

interface heightStatus{
  heightStatus?:number
}

export const Container = styled.View<heightStatus>`
  background-color: #040404;
  height: 260px;
  padding: ${(props) => props.heightStatus}px 16px 0 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

`

