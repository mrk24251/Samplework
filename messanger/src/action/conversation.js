export const addNewMessage = (newMessage) => ({
  type: 'SAVE_NEW_MESSAGE',
  payload: newMessage
})

export const addNewMessages = (newMessage) => ({
  type: 'SAVE_NEW_MESSAGES',
  payload: newMessage
})

export const addNewMessageInChat = (newMessage) => ({
  type: 'SAVE_NEW_MESSAGE_IN_CHAT',
  payload: newMessage
})

export const newEmojiMessage = (newEmojiMessage) => ({
  type: 'SAVE_NEW_EMOJI_MESSAGE',
  payload: newEmojiMessage
})

export const addEmoji = () => ({
  type: 'CLICK_EMOJI'
})

export const chooseEmoji = () => ({
  type: 'CHOSEN_EMOJI'
})

export const choosedUser = (choosedUser) => ({
  type: 'CHOSEN_USER',
  payload: choosedUser
})

export const saveConversationList = (conversationList) => ({
  type: 'SAVE_CONVERSATION_LIST',
  payload: conversationList
})

export const AddNewMassage = (messages) => ({
  type: 'SAVE_MESSAGES',
  payload: messages
})

export const LoadUser = (loaduser) => ({
  type: 'LOAD_USER',
  payload: loaduser
})

export const conversationInformation = (information) => ({
  type: 'CONVERSATION_INFORMATION',
  payload: information
})
