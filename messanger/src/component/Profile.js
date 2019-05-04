import React from 'react';
import '../App.css';
import person from '../img/person.jpeg';
import camera from '../img/camera.png';

class Profile extends React.Component {
    state = {
        bborderFName: '1px solid #999',
        bborderLName: '1px solid #999',
        bborderCity: '1px solid #999',
        bborderDescription: '1px solid #999'
    }
        handleClickFName = () => {
        this.setState({ bborderFName: '2px solid rgb(75,135,35)' });
        this.setState({ bborderLName: '1px solid #999' });
        this.setState({ bborderCity: '1px solid #999' });
        this.setState({ bborderDescription: '1px solid #999' });
    }
        handleClickLName = () => {
        this.setState({ bborderFName: '1px solid #999' });
        this.setState({ bborderLName: '2px solid rgb(75,135,35)' });
        this.setState({ bborderCity: '1px solid #999' });
        this.setState({ bborderDescription: '1px solid #999' });
    }
        handleClickCity = () => {
        this.setState({ bborderFName: '1px solid #999' });
        this.setState({ bborderLName: '1px solid #999' });
        this.setState({ bborderCity: '2px solid rgb(75,135,35)' });
        this.setState({ bborderDescription: '1px solid #999' });
    }
    handleClickDescription = () => {
        this.setState({ bborderFName: '1px solid #999' });
        this.setState({ bborderLName: '1px solid #999' });
        this.setState({ bborderCity: '1px solid #999' });
        this.setState({ bborderDescription: '2px solid rgb(75,135,35)' });
    }
    render(){
        return(
            <div>
                <div className="container_profile">
                    <div className="Avatardiv">
                        <img className='Avatar' src={person} />
                        <button className="add_profileimg">
                            <img className="cameraico" src={camera} />
                        </button>
                    </div>
                    <div className="profile_text">
                        <div className="First_name_profile">
                            <b> &nbsp;&nbsp;&nbsp; My profile</b>
                            <hr />
                            <span className="First_name">&nbsp;&nbsp;&nbsp;First name </span>
                            <input
                            className="firstname_input"
                            onClick={this.handleClickFName}
                            style={{borderBottom: this.state.bborderFName}} />
                            <span className="First_name">&nbsp;&nbsp;&nbsp;Last name </span>
                            <input
                            className="lastname_input"
                            onClick={this.handleClickLName}
                            style={{borderBottom: this.state.bborderLName}}/>
                            <span className="City">&nbsp;&nbsp;&nbsp;City </span>
                            <input className="City_input"
                            onClick={this.handleClickCity}
                            style={{borderBottom: this.state.bborderCity}}/>
                            <span className="description">&nbsp;&nbsp;&nbsp;Bio </span>
                            <textarea
                            className="description_input"
                            onClick={this.handleClickDescription}
                            style={{border: this.state.bborderDescription}}/>
                        </div>
                        <button className="save_profile">
                            Save Profile
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;