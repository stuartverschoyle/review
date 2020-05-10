import React, { Component } from 'react'
import firebase from 'firebase'
import CountUp from 'react-countup';

//****************************************************************
//
// Graph.js hand written bar chart
// gets reults from the database and creates a 
// bar chart, average result and percentage
//
//****************************************************************

export class Graph extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataList: [],
            average: '',
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
        let data_list = []

        let ratings1 = 0;
        let ratings2 = 0;
        let ratings3 = 0;
        let ratings4 = 0;
        let ratings5 = 0; 
        let average = 0;  

        ref.on("value", snapshot => {
            ref.on("child_added", function(snapshot, prevChildKey, current_value) {
                var comment = snapshot.val();
                var total =  0;
                var childData = comment.rating;
                data_list.push(childData);

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
            })   
            

        });

    };    

      render() {
        const {dataList,average,ratings1,ratings2,ratings3,ratings4,ratings5} = this.state;
        var percent1 = Math.round((ratings1 / dataList) * 100);
        var percent2 = Math.round((ratings2 / dataList) * 100);
        var percent3 = Math.round((ratings3 / dataList) * 100);
        var percent4 = Math.round((ratings4 / dataList) * 100);
        var percent5 = Math.round((ratings5 / dataList) * 100);

        return (
            <div>
                <h1>Latest Ratings</h1>
                <h3>Average: <CountUp decimals={2} end={average} /> stars </h3>

                <ul className="graph">
                <li><span className="position">5</span>{ratings5 ? <div style={{"width": percent5+"%"}}><span className="count" style={{"height" : "100%"}}><CountUp end={percent5} suffix="%" /></span></div> : null}</li>
                <li><span className="position">4</span>{ratings4 ? <div style={{"width": percent4+"%"}}><span className="count" style={{"height" : "100%"}}><CountUp end={percent4} suffix="%" /></span></div> : null}</li>
                <li><span className="position">3</span>{ratings3 ? <div style={{"width": percent3+"%"}}><span className="count" style={{"height" : "100%"}}><CountUp end={percent3} suffix="%" /></span></div> : null}</li>
                <li><span className="position">2</span>{ratings2 ? <div style={{"width": percent2+"%"}}><span className="count" style={{"height" : "100%"}}><CountUp end={percent2} suffix="%" /></span></div> : null}</li>
                <li><span className="position">1</span>{ratings1 ? <div style={{"width": percent1+"%"}}><span className="count" style={{"height" : "100%"}}><CountUp end={percent1} suffix="%" /></span></div> : null}</li>
                </ul>
            </div>
        )
    }
}

export default Graph