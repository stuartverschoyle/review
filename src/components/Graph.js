import React, { Component } from 'react'
import firebase from 'firebase'

export class Graph extends Component {

    constructor(props) {
        super(props);

        this.state = {
            average: '',
            ratings0: '',
            ratings1: '',
            ratings2: '',
            ratings3: '',
            ratings4: '',
            ratings5: ''
        }        
        
    }    
    componentDidMount() {
        this.getUserData();
    }  

    getUserData = () => {
        let ref = firebase.database().ref("/reviews");
        var data_list = []

        let ratings0 = 0;
        let ratings1 = 0;
        let ratings2 = 0;
        let ratings3 = 0;
        let ratings4 = 0;
        let ratings5 = 0; 
        let average = 0;       
        
          ref.on("value", snapshot => {

            snapshot.forEach(function(childSnapshot) {
                var childData = childSnapshot.val().rating;
                data_list.push(childData);

            });   

            ref.on("child_added", function(data, prevChildKey) {
                var comment = data.val();
                var total =  0;


                if(comment.rating === "5"){
                    ratings5 += 1
                } else if(comment.rating === "4"){
                    ratings4 += 1
                } else if(comment.rating === "3"){
                    ratings3 += 1
                } else if(comment.rating === "2"){
                    ratings2 += 1
                } else if(comment.rating === "1"){
                    ratings1 += 1
                } else if(comment.rating === "0"){
                    ratings0 += 1
                }                  
                
                for(var i=0;i<data_list.length;i++)
                {                  
                    if(isNaN(data_list[i])){
                    continue;
                    }
                    total += Number(data_list[i]);
                }
                
                average = (total / data_list.length).toFixed(2);

             });


             this.setState({
                average: average,
                dataList: data_list.length,
                ratings5: ratings5,
                ratings4: ratings4,
                ratings3: ratings3,
                ratings2: ratings2,
                ratings1: ratings1,
                ratings0: ratings0
             })

          });
  

      };    

    render() {
        const {dataList, average, ratings1,ratings2,ratings3,ratings4,ratings5} = this.state;
        var percent1 = (ratings1 / dataList) * 100;
        var percent2 = (ratings2 / dataList) * 100;
        var percent3 = (ratings3 / dataList) * 100;
        var percent4 = (ratings4 / dataList) * 100;
        var percent5 = (ratings5 / dataList) * 100;

        return (
            <div>
                <h1>Latest Ratings</h1>
                <h3>Average: {average} stars from {dataList} users</h3>

                <ul className="graph">
                    <li><span className="position">5</span>{ratings5 ? <span style={{"height" : "100%", "width" : percent5+"%"}}>{Math.ceil(percent5)+"%"}</span> : null}</li>
                    <li><span className="position">4</span>{ratings4 ? <span style={{"height" : "100%", "width" : percent4+"%"}}>{Math.ceil(percent4)+"%"}</span> : null}</li>
                    <li><span className="position">3</span>{ratings3 ? <span style={{"height" : "100%", "width" : percent3+"%"}}>{Math.ceil(percent3)+"%"}</span> : null}</li>
                    <li><span className="position">2</span>{ratings2 ? <span style={{"height" : "100%", "width" : percent2+"%"}}>{Math.ceil(percent2)+"%"}</span> : null}</li>
                    <li><span className="position">1</span>{ratings1 ? <span style={{"height" : "100%", "width" : percent1+"%"}}>{Math.ceil(percent1)+"%"}</span> : null}</li>
                </ul>
            </div>
        )
    }
}

export default Graph
