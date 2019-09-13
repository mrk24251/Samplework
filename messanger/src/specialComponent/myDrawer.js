import { Drawer } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import DrawerStyles from '../materialUI/Styles.js'
import ColorLensIcon from '@material-ui/icons/ColorLens'
import InfoIcon from '@material-ui/icons/Info';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Switch from '@material-ui/core/Switch';
import PersonIcon from '@material-ui/icons/Person';
import ProfileDialog from '../specialComponent/ProfileDialog';
import { useState } from 'react';

export default function MyDrawer (props) {
  const [Clicked, setClicked] = useState(false);

  const classes = DrawerStyles()
  return (
    <div>
      <Drawer
        anchor='left'
        open={props.open}
        variant='temporary'
        className='Drawer'
        classes={{
          paper: classes.drawerPaper
        }}>

        <div className='drawer_header'>
          <IconButton onClick={props.onClick}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><ColorLensIcon /></ListItemIcon>
            <ListItemText primary={'Night Mode'} />
            <Switch/>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary={'Edit Profile'}  />
          </ListItem>
        </List>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <Typography >About us</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Crow messanger is messanger for cool people that like free messanger
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Drawer>
      <ProfileDialog open={Clicked} />
    </div>
  )
}