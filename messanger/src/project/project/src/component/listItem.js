import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import ModalPage from './popUp'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';


export default class Mycard extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
          response: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    }
    render(){
        return(
            <Grid container spacing={4}>
            {this.props.response.map((card, index) => (
                <Grid item ktItem ey={card} xs={12} sm={6} md={4}>
                    <Card className='card'>
                        <CardMedia
                            className='cardMedia'
                            image="https://source.unsplash.com/random"
                            title="Image title"
                        />
                        <CardContent className='cardContent'>
                        <Typography gutterBottom variant="h5" component="h2">
                            TTT
                        </Typography>
                        <Typography>
                            TTTT
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
            </Grid>
        )
    }
}