var validateObject = {
    email: {
      presence: {
        message: '^Please enter your email.'
      },
      email: {
        message: '^Please enter a valid email.'
      }
    },
    password: {
      presence: {
        message: '^Please enter a password.'
      },
      length: {
        minimum: 5,
        message: '^Your password must be at least 5 characters.'
      }
    }
  }
  
  export default validateObject
  