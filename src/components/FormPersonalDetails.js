import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import Rating from '@material-ui/lab/Rating';


export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }    


    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <>
                  <AppBar title="Enter Personal Details" />

                    <h2>Rate your Experience</h2>
                    <Rating 
                        name="size-large" 
                        defaultValue={2} 
                        onChange={handleChange('rating')}
                        size="large" 
                        label="rating"
                    />

                    <br />
                    <TextField
                        label="Comment"
                        multiline
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
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style = {styles.button}
                        onClick={this.back}
                    />                                                          
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

export default FormPersonalDetails
