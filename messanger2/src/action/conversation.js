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