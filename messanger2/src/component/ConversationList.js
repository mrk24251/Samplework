import React from 'react'
import axios from 'axios'
import { saveConversationList, LoadUser, conversationInformation, AddNewMassage } from '../action/conversation'
import * as moment from 'moment'
import person from '../img/person.jpeg'

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
    this.handleClickUser(this.state.user)
    this.interval = setInterval(() => {
      this.handleClickUser(this.state.user)
    }, 5000)

    axios.get('http://127.0.0.1:8000/api/auth/user', {
      headers: { Authorization: `Token ${window.localStorage.getItem('token')}`
      }
    })
      .then(response => {
        console.log('ajjjja', response)
        console.log('allah',response.data.Messanger)
        this.props.dispatch(saveConversationList(response.data.Messanger))
      })
      .catch(error => {
        console.log('error:', error)
      })
  }

  handleChange (e) {
    let data = {
      username: e.target.value
    }
    axios.post('http://127.0.0.1:8000/searchh', data, {
      headers: { Authorization: `Token ${window.localStorage.getItem('token')}`
      }
    })
      .then((response) => {
        console.log('response::::', response.data)
        this.setState({ suggestedUsers: response.data })
      })
      .catch((error) => {
        console.log('error::::', error)
      })
  }

  handleClick (user) {
    let data = {
      user_id: user.id,
      first_name: user.first_name,
      last_name: user.last_name
    }
    axios.post('http://127.0.0.1:8000/api/auth/conversationlist', data, {
      headers: { Authorization: `Token ${window.localStorage.getItem('token')}`
      }
    })
      .then((response) => {
        console.log('respons,c33', response)
      })
      .catch((error) => {
        console.log('erroppppppp', error)
      })
    window.location.reload()
  }

  handleClickUser (user) {
    this.setState({ user: user })
    // this.setState({ conversation: conversation },
    //   () => this.props.dispatch(conversationInformation(conversation)))
    this.props.dispatch(LoadUser(user))
    // console.log('uuuuuser', conversation)

    axios.get('http://127.0.0.1:8000/api/auth/user',{
      headers: { Authorization: `Token ${window.localStorage.getItem('token')}`
      }
    })
      .then((response) => {
        console.log('respons,c33', response.data)
        this.setState({ messages: response.data.Messages },
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
                  <img src={person} className='profile_img' />
                </div>
                <div className='contentContainer'>
                  <div className='contact_content'>
                    <span>{user.username}</span>
                  </div>
                </div>
              </div>
            )
          })
          }
        </div>
        { this.props.conversationList.map((user, index) => {
          return (
            <div className='conv' key={index} onClick={() => this.handleClickUser(user)}>
              <div className='profileContainer'>
                <img src={person} className='profile_img' />
              </div>
              <div className='contentContainer'>
                <div className='contact_content'>
                  <span>{user.first_name}&nbsp;&nbsp;{user.last_name}</span>
                  <span className='latest_date'>{moment(moment(moment(user.create_at).add(4, 'hour')).add(30, 'minute')).startOf('minute').fromNow()}</span>
                </div>
                <div className='contact_content'>
                  <span className='latest_message'>{}</span>
                  <span className='unseen_message'>{}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
