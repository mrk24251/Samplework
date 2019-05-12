import React from 'react'
import profile from '../img/profile.jpg'
export default class ConversationList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      conversationList: [
        {
          firstname: 'Ali',
          lastName: 'Karimi',
          profile: 'img1',
          date: '2/10',
          latestMessage: 'salam',
          unseenMessages: 10

        }, {
          firstname: 'Mohammad',
          lastName: 'Karimi',
          profile: 'img1',
          date: '8/10',
          latestMessage: 'salam',
          unseenMessages: 10
        }, {
          firstname: 'Hasan',
          lastName: 'Karimi',
          profile: 'img1',
          date: '9/11',
          latestMessage: 'salam',
          unseenMessages: 10
        }, {
          firstname: 'Hosein',
          lastName: 'Karimi',
          profile: 'img1',
          date: '5/1',
          latestMessage: 'salam',
          unseenMessages: 10
        }
      ]
    }
  }

  render () {
    return (
      <div className='contact_list'>
        { this.state.conversationList.map((conversation, index) => {
          return (
            <div className='conv'>
              <div className='profileContainer'>
                <img src={profile} className='profile_img' />
              </div>
              <div className='contentContainer'>
                <div className='contact_content'>
                  <span>{conversation.firstname}  {conversation.lastName}</span>
                  <span className='latest_date'>{conversation.date}</span>
                </div>
                <div className='contact_content'>
                  <span className='latest_message'>{conversation.latestMessage}</span>
                  <span className='unseen_message'>{conversation.unseenMessages}</span>
                </div>
              </div>
            </div>
          )
        }
        )

        }
      </div>
    )
  }
}
