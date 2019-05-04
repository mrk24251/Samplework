import React from 'react';
import '../App.css';

class Signup extends React.Component {
    state = {
        bborderEmail: '1px solid #999',
        bborderPassword: '1px solid #999',
        bborderPassword2: '1px solid #999'
      }
      handleClickEmail = () => {
        this.setState({ bborderEmail: '2px solid rgb(75,135,35)' });
        this.setState({ bborderPassword: '1px solid #999' });
        this.setState({ bborderPassword2: '1px solid #999' });
      }
      handleClickPassword = () => {
        this.setState({ bborderEmail: '1px solid #999' });
        this.setState({ bborderPassword: '2px solid rgb(75,135,35)' });
        this.setState({ bborderPassword2: '1px solid #999' });
      }
      handleClickPassword2 = () => {
        this.setState({ bborderEmail: '1px solid #999' });
        this.setState({ bborderPassword: '1px solid #999' });
        this.setState({ bborderPassword2: '2px solid rgb(75,135,35)' });
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
                    <input 
                    className="Email" 
                    placeholder="Email"
                    onClick={this.handleClickEmail}
                    style={
                      {borderBottom: this.state.bborderEmail}}
                    />
                    <input
                    className="Password"
                    placeholder="Password"
                    onClick={this.handleClickPassword}
                    style={{borderBottom : this.state.bborderPassword}}
                    />
                    <input
                    className="Password"
                    placeholder="Retype Password"
                    onClick={this.handleClickPassword2}
                    style={{borderBottom : this.state.bborderPassword2}}
                    />
                    <button className="signup" >Signup</button>
                    <p>
                        <span className="having_account">
                            Already have an account? 
                        </span>
                        &nbsp;&nbsp;
                        <a href="https://www.google.com">
                            Login
                        </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}
export default Signup;