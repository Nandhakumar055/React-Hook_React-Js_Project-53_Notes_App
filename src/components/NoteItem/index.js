import {NoteItemContainer, NoteItems, Title, NoteText} from './styledComponents'

const NoteItem = props => {
  const {noteItem} = props
  const {title, note} = noteItem

  return (
    <NoteItemContainer>
      <NoteItems>
        <Title>{title}</Title>
        <NoteText>{note}</NoteText>
      </NoteItems>
    </NoteItemContainer>
  )
}

export default NoteItem
