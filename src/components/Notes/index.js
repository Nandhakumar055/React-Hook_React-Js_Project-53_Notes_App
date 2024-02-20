import {useState} from 'react'
import {v4 as uuid} from 'uuid'

import NoteItem from '../NoteItem'

import {
  NotesMainContainer,
  NotesContainer,
  Heading,
  CreateNoteCardContainer,
  UserTitle,
  UserNote,
  ErrorMsg,
  AddButton,
  EmptyMainContainer,
  EmptyContainer,
  EmptyImage,
  EmptyErrorMsg,
  EmptyNoteMsg,
  NoteItemMainContainer,
} from './styledComponents'

const Notes = () => {
  const [userTitle, setUserTitle] = useState('')
  const [userNote, setUserNote] = useState('')
  const [notesList, setNotList] = useState([])
  const [isTitleError, setTitleError] = useState(false)
  const [isNoteError, setNoteError] = useState(false)

  const isEmptyNots = notesList.length === 0

  const onChangeTitle = event => setUserTitle(event.target.value)
  const onChangeNote = event => setUserNote(event.target.value)

  const onClickAddButton = event => {
    event.preventDefault()

    const addNewNoteItem = {
      id: uuid(),
      title: userTitle,
      note: userNote,
    }

    if (userTitle !== '' && userNote !== '') {
      setNotList(prevState => [...prevState, addNewNoteItem])
      setUserTitle('')
      setUserNote('')
      setTitleError(false)
      setNoteError(false)
    } else {
      if (userTitle === '') {
        setTitleError(true)
      } else {
        setTitleError(false)
      }

      if (userNote === '') {
        setNoteError(true)
      } else {
        setNoteError(false)
      }
    }
  }

  const titleError = isTitleError ? 'red' : 'white'
  const noteError = isNoteError ? 'red' : 'white'

  console.log(titleError, noteError)

  return (
    <NotesMainContainer>
      <NotesContainer>
        <Heading>Notes</Heading>
        <CreateNoteCardContainer onSubmit={onClickAddButton}>
          <UserTitle
            type="text"
            placeholder="Title"
            onChange={onChangeTitle}
            value={userTitle}
            isError={titleError}
          />
          {isTitleError && <ErrorMsg>*Please enter your Title</ErrorMsg>}
          <UserNote
            type="text"
            placeholder="Take a Note..."
            onChange={onChangeNote}
            value={userNote}
            isError={noteError}
          />
          {isNoteError && <ErrorMsg>*Please enter your Note</ErrorMsg>}
          <AddButton type="submit">Add</AddButton>
        </CreateNoteCardContainer>
        {isEmptyNots ? (
          <EmptyMainContainer>
            <EmptyContainer>
              <EmptyImage
                src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
                alt="notes empty"
              />
              <EmptyErrorMsg>No Notes Yet</EmptyErrorMsg>
              <EmptyNoteMsg>Notes you add will appear here</EmptyNoteMsg>
            </EmptyContainer>
          </EmptyMainContainer>
        ) : (
          <NoteItemMainContainer>
            {notesList.map(eachNote => (
              <NoteItem key={eachNote.id} noteItem={eachNote} />
            ))}
          </NoteItemMainContainer>
        )}
      </NotesContainer>
    </NotesMainContainer>
  )
}

export default Notes
