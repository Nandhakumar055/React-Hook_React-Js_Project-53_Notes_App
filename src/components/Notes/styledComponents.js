import styled from 'styled-components'

export const NotesMainContainer = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: flex-start center;
  padding: 30px;
`
export const NotesContainer = styled.div`
  display: grid;
  place-items: flex-start center;
  width: 100%;
  max-width: 850px;
`

export const Heading = styled.h1`
  text-align: center;
  font-size: 30px;
  color: #4c63b6;
  font-family: 'Bree Serif';
  margin-bottom: 40px;
`
export const CreateNoteCardContainer = styled.form`
  border-radius: 10px;
  display: grid;
  place-items: flex-start;
  padding: 20px;
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.699) 0px 7px 29px 0px;
`
export const UserTitle = styled.input`
  padding: 10px;
  border: none;
  width: 100%;
  max-width: 400px;
  margin: 10px 0px;
  outline-color: orange;
  font-weight: 500;
`
export const UserNote = styled.textarea`
  padding: 10px;
  border: none;
  width: 100%;
  max-width: 400px;
  height: 100px;
  margin: 10px 0px;
  outline-color: orange;
  font-weight: 500;
`

export const AddButton = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: #4c63b6;
  border: none;
  border-radius: 10px;
  justify-self: flex-end;
  margin: 10px 0px;
  font-weight: 500;
`
export const EmptyMainContainer = styled.div`
  display: grid;
  place-items: center;
  height: 60vh;
`
export const EmptyContainer = styled.div`
  display: grid;
  place-items: flex-start center;
`

export const EmptyImage = styled.img`
  width: 80%;
  max-width: 200px;
`
export const EmptyErrorMsg = styled.h1`
  font-size: 20px;
  color: #475569;
  text-align: center;
`
export const EmptyNoteMsg = styled.p`
  font-size: 16px;
  color: #475569;
  text-align: center;
  margin-top: 5px;
`

export const NoteItemMainContainer = styled.ul`
  padding: 30px 0px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
