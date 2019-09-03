import axios from 'axios'
import React from 'react'

export default class ModalContent extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          information: [],
          title: null,
          description: null
        }
    }

    handleChangeTitle (e) {
        this.setState({ title: e.target.value })
    }

    handleChangeDescription (e) {
        this.setState({description: e.target.value})
    }

    async handleClick () {
        let data = {
            title: this.state.title,
            description: this.state.description
        }

        await axios.post('http://localhost:3001/api/', data)
          .then((response) => {
            console.log('respons,c33', response)
          })
          .catch((error) => {
            console.log('error::::', error)
          })

        window.location.reload()
      }

    render(){
        return(
            <div>
                <h1>EDIT</h1>
                <br/>
                <span>Title</span>
                <input placeholder='enter your title' onChange={(e) => this.handleChangeTitle(e)}/>
                <br />
                <span>description</span>
                <input placeholder='enter decription' onChange={(e) => this.handleChangeDescription(e)}/>
                <br />
                <button onClick={() => this.handleClick()}>Save product</button>
            </div>
        )
    }
}