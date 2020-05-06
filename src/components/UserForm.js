import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import ConfirmUserDetails from './ConfirmUserDetails'
import Success from './Success'

import firebase from 'firebase'
import config from "./../config"

export class UserForm extends Component {

    constructor(props) {
        super(props);
        if(!firebase.apps.length){
            firebase.initializeApp(config);
        }

        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            rating: "0",
            comment: '',
            comments: [],
        }        
        
      }    
    
      writeUserData = () => {

        firebase.database()
          .ref("/reviews")
          .push()
          .set(this.state);
          console.log("DATA SAVED");

          this.setState({
              step: 3
          });          

      };
    
    clearform = () => {
        this.setState({
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            rating: "0",
            comment: '',
        });
    }

    // go to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // go back a step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }    

    //change fields
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step, firstName, lastName, email, rating, comment } = this.state;
        const values = { step, firstName, lastName, email, rating, comment };
        
        switch(step){
            case 1:
                return(
                    <>
                        <FormUserDetails
                            nextStep = {this.nextStep}
                            handleChange = {this.handleChange}
                            values = {values}
                        />
                     </>
                )            
            case 2:
                return(
                    <>
                        <ConfirmUserDetails 
                            nextStep = {this.nextStep}
                            prevStep = {this.prevStep}
                            writeUserData = {this.writeUserData}
                            values = {values}                    
                        />     
                           
                    </>                           
                )
                case 3:
                    return(
                        <>
                            <Success
                                values = {values} 
                                clearForm = {this.clearform}
                            />                                                                          
                        </>                          
                    )                    
            default:                                       
        }
    }
}

export default UserForm
