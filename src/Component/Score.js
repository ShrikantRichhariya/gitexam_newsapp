import React, { Component } from 'react'
import Cricketscore from './Cricketscore'
import Navbar from './Navbar';

export class Score extends Component {
constructor(){
  super();
  console.log("heloo i am a constructor from news component");
  this.state={
    data:[],
    loading: false
  }
}

  async componentDidMount(){
    let url="https://api.cricapi.com/v1/currentMatches?apikey=74313448-5de6-4b3e-9615-f1dcb3e84f8b&offset=0";
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(data);
    this.setState({data: parsedData.data})

  }

  render() { 
    return (
      <>
      <Navbar/>
        <div className="container my-3">
            <h1 className="firsthead">Cricket scores Today</h1> 
            <div className="row"> 
            {this.state.data.map((element)=>{
                return <div className="col-md-4" key={element.id}>
                    <Cricketscore  name={element.name?element.name:""} matchType={element.matchType} status={element.status}  dateTimeGMT={element.dateTimeGMT}  venue={element.venue}  />
                </div> 
            })} 
       
      </div>

      </div>
      </>
    )
  }
}

export default Score