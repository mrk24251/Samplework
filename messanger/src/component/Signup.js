import React from 'react';
import '../App.css';
import validate from '../validation/validateFunction'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import axios from 'axios'
import {withRouter} from 'react-router'
import Spinner from 'react-spinkit'

class Signup extends React.Component {
  constructor(props){
    super(props)
    this.state={
      bborderEmail: '1px solid #999',
      bborderPassword: '1px solid #999',
      bborderPassword2: '1px solid #999',
      Email:null,
      Password: null,
      Password2:null,
      isLoading: false,
      error: {
        email: null,
        password: null,
        password2: null,
        equalPassword:null
      }
    }
  }

  componentDidMount(){
    document.title = "Sign up"
  }

  handleChange = (e) => {
    let name = e.target.name
    this.setState({ [name]: e.target.value })
    { e.target.value === '' && this.setState({ [name]: null})}
  }

  handleClick = (e) => {
    let name = e.target.name
    let bborder = 'bborder'+[name]
    this.setState({bborderEmail: '1px solid #999',bborderPassword: '1px solid #999',bborderPassword2: '1px solid #999'})
    this.setState({ [bborder]: '2px solid rgb(75,135,35)' })
  }

  handleClickButton = () => {
    //validation
    let emailError = validate('email', this.state.Email)
    let passwordError = validate('password', this.state.Password)
    let password2Error =validate('password2',this.state.Password2)
    this.setState({...this.state , error: {...this.state.error, email:emailError, password: passwordError, password2: password2Error}})
    
    if(this.state.password === this.state.password2) {
      //posting data
      let data = {
        username: this.state.Email,
        password: this.state.Password
      }
      if (emailError || passwordError){
      }else{
        if (this.state.Password===this.state.Password2){
          this.setState({isLoading: true})
          axios.post('http://mrk24251.pythonanywhere.com/api/auth/register', data)
          .then( (response)=> {
            console.log('response::::',response);
            window.localStorage.setItem('token', response.data.token)
            window.localStorage.setItem('id', response.data.user.id)
            this.props.history.push('/profile')
          })
          .catch( (error)=> {
            console.log('error::::',error);
            this.setState({isLoading:false})
          });
        }
      }
    } else {
      this.setState({equalPassword: 'Passwod and retype password do not match!'})
    }
  }

  render(){
      return (
          <div className="App">
            <div className="bottom_App">
              <div className="container">
                <div className="Signup_header">
                  <b className="messanger_name">Crow</b>
                </div>
                <div className="user_data">
                  <p className="signup_text">Sign up to Crow messanger</p>
                  <span className="user_guide">
                      please enter your Email and password and click signup button for creating your account
                  </span>
                  { this.state.error.email !== null &&
                  <p className="Email_error">{this.state.error.email}</p>
                  }
                  <input 
                  className="Email" 
                  placeholder="Email"
                  name="Email"
                  onChange={(e) => this.handleChange(e)}
                  onClick={(e) => this.handleClick(e)}
                  style={
                    {borderBottom: this.state.bborderEmail}}
                  />
                  { this.state.error.password !== null &&
                  <p className="Password_error">{this.state.error.password}</p>
                  }
                  <input
                  className="Password"
                  placeholder="Password"
                  name="Password"
                  type="password"
                  onChange={(e) => this.handleChange(e)}
                  onClick={(e) => this.handleClick(e)}
                  style={{borderBottom : this.state.bborderPassword}}
                  />
                  { this.state.error.password2 !== null &&
                    <p className="Password_error">{this.state.error.password2}</p>
                  }
                  <input
                  className="Password"
                  placeholder="Retype Password"
                  name="Password2"
                  type="password"
                  onChange={(e) => this.handleChange(e)}
                  onClick={(e) => this.handleClick(e)}
                  style={{borderBottom : this.state.bborderPassword2}}
                  />
                  {this.state.isLoading ? (
                    <Spinner 
                      name="circle"
                      color="green"
                      className='loading'/>
                  ) : 
                    <button
                      className="signup"
                      onClick={(e) => this.handleClickButton(e)} 
                    >Signup</button>
                  }
                  <p>
                    <span className="having_account">
                        Already have an account? 
                    </span>
                    &nbsp;&nbsp;
                    <Link to="/">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
      );
    }
}
export default withRouter(Signup);