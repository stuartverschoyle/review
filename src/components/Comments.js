import React, { Component } from 'react'
import firebase from 'firebase'

export class Comments extends Component {
    componentDidMount() {
        this.getUserData();
    }  

    getUserData = () => {
        let ref = firebase.database().ref("/reviews");

          ref.on("value", snapshot => {

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
                <ul id="comments" className="commentsContainer"></ul>
            </div>
        )
    }
}

export default Comments
