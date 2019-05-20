import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const AuthButton = props => 
    (props.authenticated) 
        ? <RaisedButton label='Logout'
                        onTouchTap={props.auth.logout}
                        fullWidth
                        secondary
          />
        : <RaisedButton label='Login / Signup'
                        onTouchTap={props.auth.showLock}
                        fullWidth
                        primary
          />

export default AuthButton