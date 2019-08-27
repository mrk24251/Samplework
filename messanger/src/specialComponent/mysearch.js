import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import TextField from '@material-ui/core/TextField'
import React from 'react'

export default class MySearch extends React.Component {
  render () {
    return (
      <div className='search_bar'>
        <IconButton
          className='MenuIcon'
          color='inherit'
          edge='start'
          onClick={this.props.onClick}
        >
          <MenuIcon />
        </IconButton>
        <TextField
          id='search'
          label='Search field'
          type='search'
          variant='filled'
          fullWidth
          onChange={(e) => this.props.onChange(e)}
        />
      </div>
    )
  }
}
