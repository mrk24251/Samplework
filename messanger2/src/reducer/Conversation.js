const INIT = {
  newMessage: '',
  newMessages: '',
  newEmojiMessage: '',
  showEmojiPicker: false,
  message: [{
    id: 1,
    message: 'salam'
  },
  {
    id: 2,
    message: 'salam'
  },
  {
    id: 1,
    message: 'khoobi?'
  }
  ]
}

function conversation (state = INIT, action) {
  switch (action.type) {
    case 'SAVE_NEW_MESSAGE':
      return { ...state,
        newMessage: action.payload
      }
    case 'SAVE_NEW_MESSAGES':
      return { ...state,
        newMessages: action.payload
      }
    case 'SAVE_NEW_MESSAGE_IN_CHAT':
      return { ...state,
        message: [...state.message, {id: 1, message: action.payload}]
        
      }
    case 'CLICK_EMOJI':
      return { ...state, showEmojiPicker: !state.showEmojiPicker }
    case 'CHOSEN_EMOJI':
      return { ...state, showEmojiPicker: false }
    case 'SAVE_NEW_EMOJI_MESSAGE':
      return { ...state,
        newEmojiMessage: action.payload
      }
    default:
      return state
  }
}

export default conversation
