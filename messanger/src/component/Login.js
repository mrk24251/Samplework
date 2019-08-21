import React from 'react';
import logo from '../img/logo.ico';
import '../App.css';
import validate from '../validation/validateFunction'
import axios from 'axios'
import {withRouter} from 'react-router'
import Spinner from 'react-spinkit'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state={
      bborderEmail: '1px solid #999',
      bborderPassword: '1px solid #999',
      hover: 'false',
      Email:null,
      isLoading: false,
      Password: null,
      error: {
        email: null,
        password: null
      }
    }
  }

  componentDidMount(){
    document.title = "Login"
  }

  handleChange = (e) => {
    let name = e.target.name
    this.setState({ [name]: e.target.value })
    { e.target.value === '' && this.setState({ [name]: null})}
  }

  handleClick = (e) => {
    let name = e.target.name
    let bborder = 'bborder'+[name]
    this.setState({bborderEmail: '1px solid #999',bborderPassword: '1px solid #999'})
    this.setState({ [bborder]: '2px solid rgb(75,135,35)' })
  }

  handleClickButton = () => {
    //validation
    let emailError = validate('email', this.state.Email)
    let passwordError = validate('password', this.state.Password)
    this.setState({...this.state, error: {...this.state.error, email:emailError, password: passwordError}})
    
    let data = {
      username: this.state.Email,
      password: this.state.Password
    }
    if (emailError || passwordError){
    }else{
      this.setState({isLoading: true})
      axios.post('http://mrk24251.pythonanywhere.com/api/auth/Login', data)
      .then( (response) => {
        console.log('response::::',response);
        window.localStorage.setItem('token',response.data.token)
        window.localStorage.setItem('id',response.data.user.id)
        this.props.history.push('/massenger')
      })
      .catch( (error) =>{
        this.setState({isLoading:false})
        console.log('error::::',error);
      });
    }
  }

  render(){
    return (
      <div className="App">
        <div className="bottom_App">
          <div className="container">
            <div className="login_header">
              <img className="logo" src={logo} />
              <h1 className="messanger_name">Crow</h1>
            </div>
            <div className="user_data">
              <p className="signin_text">Sign in</p>
              <span className="user_guide">
                please enter your Email and password and click login button & if you don't have account click Sign up key
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
              style={{borderBottom: this.state.bborderEmail}}
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
              {this.state.isLoading ? (
                <Spinner 
                  name="circle"
                  color="green"
                  className='loading'/>
              ) : 
                <button
                className="log_in"
                onClick={(e) => this.handleClickButton(e)}
                >log in</button>
              }
              <button
              className="sign_up"
              onClick={()=> {this.props.history.replace('/signup')}}
              >Sign up</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
