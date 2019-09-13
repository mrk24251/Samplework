import React from 'react'
import axios from 'axios'
import { saveConversationList, LoadUser, conversationInformation, AddNewMassage, choosedUser } from '../action/conversation'
import * as moment from 'moment'
import person from '../img/person.jpeg'
import Mysearch from '../specialComponent/mysearch'
import MyDrawer from '../specialComponent/myDrawer'
import Spinner from 'react-spinkit'
import { PassThrough } from 'stream';
import CircularProgress from '@material-ui/core/CircularProgress';

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
      conversation: [],
      isClicked: false,
      openDrawer: false,
      isLoadingSearch: false,
      choosedUser: false
    }
  }

  componentDidMount () {
    this.setState({ isLoading: false })
    this.handleClickUser(this.state.user)
    this.interval = setInterval(() => {
      this.handleClickUser(this.state.user)
    }, 5000)

    this.props.dispatch(choosedUser(this.state.choosedUser))
    
    axios.get('http://mrk24251.pythonanywhere.com/api/auth/user', {
      headers: { Authorization: `Token ${window.localStorage.getItem('token')}`
      }
    })
      .then(response => {
        console.log('ajjjja', response)
        console.log('allah', response.data.Messanger)
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

    this.setState({isLoadingSearch: true})
    axios.post('http://mrk24251.pythonanywhere.com/searchh', data, {
      headers: { Authorization: `Token ${window.localStorage.getItem('token')}`
      }
    })
      .then((response) => {
        console.log('response::::', response.data)
        this.setState({ suggestedUsers: response.data })
        this.setState({isLoadingSearch:false})
      })
      .catch((error) => {
        console.log('error::::', error)
        this.setState({isLoadingSearch:false})
      })
  }

  handleClick (user) {
    let data = {
      user_id: user.id,
      first_name: user.first_name,
      last_name: user.last_name
    }
    axios.post('http://mrk24251.pythonanywhere.com/api/auth/conversationlist', data, {
      headers: { Authorization: `Token ${window.localStorage.getItem('token')}`
      }
    })
      .then((response) => {
        console.log('respons,c33', response)
        window.location.reload()
      })
      .catch((error) => {
        console.log('erroppppppp', error)
      })
  }

  handleClickUser (user) {
    this.setState({ user: user })
    this.setState({ isClicked: true })
    this.props.dispatch(LoadUser(user))

    axios.get('http://mrk24251.pythonanywhere.com/api/auth/user', {
      headers: { Authorization: `Token ${window.localStorage.getItem('token')}`
      }
    })
      .then((response) => {
        console.log('respons,c33', response.data)
        this.setState({ messages: response.data.Messages },
          () => this.props.dispatch(AddNewMassage(this.state.messages)))

        this.setState({choosedUser: true}, () => this.props.dispatch(choosedUser(this.state.choosedUser)))
      })
      .catch((error) => {
        console.log('error::::', error)
      })
  }

  handleDrawer () {
    this.setState({ openDrawer: true })
  }

  handleCloseDrawer () {
    this.setState({ openDrawer: false })
  }

  render () {
    return (
      <div className='contact_list' >
        <div className='leftSide'>
          <div>
            <MyDrawer
              open={this.state.openDrawer}
              onClick={() => this.handleCloseDrawer()} /> 
          </div>
          <div>
            <Mysearch
              onChange={(e) => this.handleChange(e)}
              onClick={() => this.handleDrawer()} />
          
          {this.state.isLoadingSearch ? (
            <div className='LoadingSearch'>
              <span
                className='LoadingSearchText'>
                searching
              </span>
              <Spinner 
                name="ball-beat"
                color="green"
                className="LoadingSearchUI"
                />
            </div>
            ) : 
              PassThrough
            }

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
                  {user.latest_message=="" ? (
                    <span className='latest_message'>{}</span>
                  ) : <span className='latest_message'>{user.latest_message.fields.text}</span>}
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
