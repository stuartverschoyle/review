import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'


export class ConfirmUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        //process form
        this.props.writeUserData();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }    

    render() {
        const { values:{firstName, lastName, email, rating, comment} } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Confirm Details" />       
                    <List>
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
