import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import Rating from '@material-ui/lab/Rating';

import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Checkout.com Rating" />
                    <TextField
                        hintText="enter your first name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                        hintText="enter your last name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />  
                    <br />
                    <TextField
                        hintText="enter your email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />  
                    <h2>Rate your Experience</h2>
                    <Rating 
                        name="size-large" 
                        defaultValue={0} 
                        onChange={handleChange('rating')}
                        size="large" 
                        label="rating"
                    />

                    <br />
                    <TextField
                        label="Comment"
                        multiline="true"
                        rows={4}
                        defaultValue={values.comment}
                        variant="outlined"
                        floatingLabelText="Comment"
                        hintText="enter your comment"
                        onChange={handleChange('comment')}
                    />  
                    <br />
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style = {styles.button}
                        onClick={this.continue}
                    />       
                    <br />
                </>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails
