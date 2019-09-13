import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import validate from '../validation/validateFunction'
import { useState } from 'react';
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  Email_error: {
    color: 'red'
  },
  Password_error: {
    color: 'red'
  },  
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [emailError, setemailError] = useState(null);
  const [passwordError, setpasswordError] = useState(null);
  const [Email, setEmail] = useState(null);
  const [password, setpassword] = useState(null);

  async function handleClickButton () {
    //validation
    let emailError1 = validate('email', Email)
    let passwordError1 = validate('password', password)
    await setemailError(emailError1)
    await setpasswordError(passwordError1)

    let data = {
      email: Email,
      password: password
    }
    await axios.post('http://localhost:3001/api/', data)
      .then((response) => {
        console.log('response::::',response);
        window.localStorage.setItem('email',response.data.email)
        window.localStorage.setItem('id',response.data._id)
      })
      .catch((error) =>{
        console.log('error::::',error);
      });
  }

  function handleChangeEmail (e) {
    setEmail(e.target.value)
    console.log(e.target.value)
    console.log('abc',emailError)
  }
  
  function handleChangePassword (e) {
    setpassword(e.target.value)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChangeEmail}
          />
          <p className={classes.Email_error}>{ emailError }</p>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChangePassword}
          />
          <p className={classes.Password_error}>{ passwordError }</p>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClickButton}
          >
            Sign In
          </Button >
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}