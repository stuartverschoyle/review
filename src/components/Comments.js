import React, { Component } from 'react'
import firebase from 'firebase'

//********************************************************
//
// Get the comments from the firebase database and append 
// them to the comments div#comments
//
//********************************************************

export class Comments extends Component {
    componentDidMount() {
        this.getUserData();
    }
      

    getUserData = () => {
        let ref = firebase.database().ref("/reviews");

          ref.once("value", snapshot => {

            ref.on("child_added", function(data, prevChildKey) {
                var comment = data.val();
                var node = document.createElement("li");
                var textnode = document.createTextNode(comment.comment);
                node.appendChild(textnode);   
                var commentsContainer = document.getElementById('comments');
                if (commentsContainer){
                    commentsContainer.appendChild(node); 
                }           
             
             });


          });
  

    };    

    render() {
        return (
            <div>
                <h1>Latest Comments</h1>
                <div id="list">
                    <ul id="comments" className="commentsContainer"></ul>
                </div>
            </div>
        )
    }
}

export default Comments
