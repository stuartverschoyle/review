import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
import logo from '.././logo.svg'

//********************************
//
// ConformUserDetails.js lists all the users inputs before continuing 
// giving the user a chance to go back and edit fields if needs be
//
//********************************

export class ConfirmUserDetails extends Component {


    //process form from UserForm.js
    continue = e => {
        e.preventDefault();
        this.props.writeUserData();
    }

    // back to previous step
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }    

    render() {
        const { values:{firstName, lastName, email, rating, comment} } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <AppBar className="logo" title={<img src={logo} alt="" />}/>
                    <h1>Confirm Details</h1>
                    <List className="userForm">
                        <ListItem 
                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                        <ListItem 
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <ListItem 
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem 
                            primaryText="Rating"
                            secondaryText={rating}
                        />
                        <ListItem 
                            primaryText="Comment"
                            secondaryText={comment}
                        />                                                                                                
                    </List>
                    <br />
                    <RaisedButton 
                        label="Confirm &amp; Continue"
                        primary={true}
                        style = {styles.button}
                        onClick={this.continue}
                        className="checkout"
                    /> 
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style = {styles.button}
                        onClick={this.back}
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

export default ConfirmUserDetails
