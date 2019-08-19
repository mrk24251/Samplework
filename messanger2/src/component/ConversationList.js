import React from 'react'
import axios from 'axios'
import { saveConversationList, LoadUser, conversationInformation, AddNewMassage } from '../action/conversation'
import * as moment from 'moment'

export default class ConversationList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      conversationList: [],
      myId: window.localStorage.getItem('id'),
      token: window.localStorage.getItem('token'),
      suggestedUsers: [],
      messages: [],
      isLoading: true,
      user: [],
      conversation: []
    }
  }

  componentDidMount () {
    this.setState({ isLoading: false })
    this.handleClickUser(this.state.user, this.state.conversation)
    this.interval = setInterval(() => {
      this.handleClickUser(this.state.user, this.state.conversation)
    }, 5000)

    const token = window.localStorage.getItem('token')
    axios.get('https://api.paywith.click/conversation/', {
      params: {
        token: token
      }
    })
      .then(response => {
        console.log('ajjjja', response)
        this.props.dispatch(saveConversationList(response.data.data.conversation_details))
      })
      .catch(error => {
        console.log('error:', error)
      })
  }

  handleChange (e) {
    let fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('query', e.target.value)
    fdata.append('size', 4)
    console.log('fdatta', fdata)
    axios.post('https://api.paywith.click/explore/search/contacts/', fdata)
      .then((response) => {
        console.log('response::::', response)
        this.setState({ suggestedUsers: response.data.data.users })
      })
      .catch((error) => {
        console.log('error::::', error)
      })
  }

  handleClick (user) {
    let fdata = new FormData()
    fdata.append('user_id', user.id)
    fdata.append('token', this.state.token)
    axios.post('https://api.paywith.click/conversation/', fdata)
      .then((response) => {
        console.log('respons,c33', response)
      })
      .catch((error) => {
        console.log('error::::', error)
      })
    window.location.reload()
  }

  handleClickUser (user, conversation) {
    this.setState({ user: user })
    this.setState({ conversation: conversation },
      () => this.props.dispatch(conversationInformation(conversation)))
    this.props.dispatch(LoadUser(user))
    console.log('uuuuuser', conversation)

    let fdata = new FormData()
    fdata.append('user_id', user.id)
    fdata.append('token', this.state.token)

    axios.post('https://api.paywith.click/conversation/', fdata)
      .then((response) => {
        console.log('respons,c33', response.data.data.messages)
        this.setState({ messages: response.data.data.messages },
          () => this.props.dispatch(AddNewMassage(this.state.messages)))
      })
      .catch((error) => {
        console.log('error::::', error)
      })
  }

  render () {
    return (
      <div className='contact_list' >
        <div >
          <input
            className='search'
            placeholder='type a name...'
            onChange={(e) => this.handleChange(e)}
          />
          { this.state.suggestedUsers.map((user, index) => {
            return (
              <div className='conv' key={index} onClick={() => this.handleClick(user)}>
                <div className='profileContainer'>
                  <img src={user.avatar_url} className='profile_img' />
                </div>
                <div className='contentContainer'>
                  <div className='contact_content'>
                    <span>{user.name}</span>
                  </div>
                </div>
              </div>
            )
          })
          }

        </div>
        { this.props.conversationList.map((conversation, index) => {
          return (
            conversation.users.map((user, idx) => {
              console.log('cccccccc', this.state.messages)
              if (user.id != this.state.myId) {
                return (
                  <div className='conv' key={index} onClick={() => this.handleClickUser(user, conversation)}>
                    <div className='profileContainer'>
                      <img src={user.avatar_url} className='profile_img' />
                    </div>
                    <div className='contentContainer'>
                      <div className='contact_content'>
                        <span>{user.name}</span>
                        <span className='latest_date'>{moment(moment(moment(conversation.latest_message_date).add(4, 'hour')).add(30, 'minute')).startOf('minute').fromNow()}</span>
                      </div>
                      <div className='contact_content'>
                        <span className='latest_message'>{}</span>
                        <span className='unseen_message'>{conversation.unseen_messages.myId}</span>
                      </div>
                    </div>
                  </div>
                )
              }
            })
          )
        }
        )
        }
      </div>
    )
  }
}
