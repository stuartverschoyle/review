import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import Rating from '@material-ui/lab/Rating';

import RaisedButton from 'material-ui/RaisedButton'

//********************************************************
//
// FormUserData.js is the first step - 
// Validation and form submission
//
//********************************************************
export class FormUserDetails extends Component {

    state = {
        error: false,
        emailerror: false,
        successValidation: false
    }        

    // validate email
    validateEmail(email) {
        var re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }

    // continue button with text field validation leading to next step (2)
    continue = e => {
        e.preventDefault();
        var form = document.forms["myForm"];
        var fname = form["firstName"].value;
        var lname = form["lastName"].value;
        var rating = form["rating"].value;
        var email = form["email"].value;
        var comment = form["comment"].value;

        if (fname === "" || lname === "" || rating === "" || email === "" || comment === "") {
          this.setState({error: true});
          return false;
        } else {
            

            if (this.validateEmail(email)) {
                 this.props.nextStep();                
            } else {
                this.setState({emailerror: true});
            }


        }        
    }

    render() {
        const { values, handleChange } = this.props;
        const {error, emailerror} = this.state;

        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Checkout.com Rating" />
                    <form name="myForm" validate>
                        <TextField
                            hintText="enter your first name"
                            floatingLabelText="First Name"
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                            name="firstName"
                        />
                        <br />
                        <TextField
                            hintText="enter your last name"
                            floatingLabelText="Last Name"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                            name="lastName"
                        />  
                        <br />
                        <TextField
                            hintText="enter your email"
                            floatingLabelText="Email"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            name="email"
                            errorText={emailerror ? 'Email is invalid' : ''}
                        />  
                        <h2>Rate your Experience</h2>
                        <Rating 
                            name="rating" 
                            defaultValue={0} 
                            onChange={handleChange('rating')}
                            size="large" 
                            label="rating"
                        />

                        <br />
                        <TextField
                            name="comment"
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
                    </form>

                    <RaisedButton 
                        label={error ? 'Please complete the form' : 'Continue'}
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
