import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Mycard from './listItem'
import MycardContainer from '../container/project'
import axios from 'axios'
import {addNewProduct} from '../action/Project'

export default class CardList extends React.Component {

    componentDidMount() {
        axios.get('http://localhost:3001/api/')
          .then((response) => {
            this.props.dispatch(addNewProduct(response.data))
          })
          .catch((error) => {
            console.log('error::::', error)
          })
    }

    render(){
        return(
            <Container className='cardGrid' maxWidth="md">
                <MycardContainer />
            </Container>
        )
    }
}