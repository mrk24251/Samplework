import Modal from '@material-ui/core/Modal';
import React from 'react'
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Popup from "reactjs-popup";
import Button from '@material-ui/core/Button';
import ModalContent from './ModalContent'


export default class ModalPage extends React.Component {
    
    render(){
        return(
            <Popup
            trigger={<Button size="small" color="primary" onClick={() => this.handleClick()}>edit</Button>}
            modal
            closeOnDocumentClick
           >
            <ModalContent />
          </Popup>
        )
    }
}