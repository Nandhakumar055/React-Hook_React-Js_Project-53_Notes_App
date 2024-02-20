import styled from 'styled-components'

export const NoteItemContainer = styled.li`
  padding: 10px;
  list-style: none;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 50%;
  }
  @media screen and (min-width: 768px) {
    width: 33%;
  }
`
export const NoteItems = styled.div`
  width: 100%;
  border: solid 3px #4c63b6;
  border-radius: 10px;
  padding: 10px;
`

export const Title = styled.h1`
  font-size: 18px;
`
export const NoteText = styled.p`
  font-size: 16px;
  line-height: 25px;
  margin-top: 0px;
`
