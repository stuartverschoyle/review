import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'


export class Success extends Component {

    home = e => {
        e.preventDefault();
        //process form
        document.location.href="/";
    } 

    render() {
        const { values:{firstName, rating} } = this.props;
        let review = 'Great, We here at Checkout.com take pride in our user experience';
        if (parseInt(rating) <= 3){
            review = 'Sorry for your bad experience. I hope we can improve your experience soon!'
        }
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Success" />       
                    <h1>Thank you {firstName} for your submission</h1>
                    <p>{review}</p>        
                    <RaisedButton 
                        label="Back"
                        primary={true}
                        onClick={this.home}
                    />                                                                   
                </>
            </MuiThemeProvider>
        )
    }
}

export default Success;