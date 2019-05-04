import React from 'react';
import logo from '../img/logo.ico'
import '../App.css';

class Login extends React.Component {
  state = {
    bborderEmail: '1px solid #999',
    bborderPassword: '1px solid #999',
  }
  handleClickEmail = () => {
    this.setState({ bborderEmail: '2px solid rgb(75,135,35)' });
    this.setState({ bborderPassword: '1px solid #999' });
  }
  handleClickPassword = () => {
    this.setState({ bborderEmail: '1px solid #999' });
    this.setState({ bborderPassword: '2px solid rgb(75,135,35)' });
  }
  handleClickPassword2 = () => {
    this.setState({ bborderEmail: '1px solid #999' });
    this.setState({ bborderPassword: '1px solid #999' });
  }
  render(){
    return (
      <body>
        <div className="App">
          <div className="bottom_App">
            <div className="container">
              <div className="login_header">
                <img className="logo" src={logo} />
                <b className="messanger_name">Crow</b>
              </div>
              <div className="user_data">
                <p className="signin_text">Sign in</p>
                <span className="user_guide">
                please enter your Email and password and click login button & if you don't have account click Sign up key
                </span>
                <input 
                className="Email" 
                placeholder="Email"
                onClick={this.handleClickEmail}
                style={{borderBottom: this.state.bborderEmail}}
                />
                <input
                className="Password"
                placeholder="Password"
                onClick={this.handleClickPassword}
                style={{borderBottom : this.state.bborderPassword}}
                />
                <button className="log_in">log in</button>
                <button className="sign_up">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
export default Login;
