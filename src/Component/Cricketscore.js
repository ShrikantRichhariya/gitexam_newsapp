import React, { Component } from 'react'

export default class Cricketscore extends Component {
  render() {
    let{id, name,matchType,status,dateTimeGMT,venue,score}=this.props;
    return (
      <div>
        <div className="card text-dark bg-warning mb-3" id="criccard">
                
            <div className="card-body">
            {/* <h5 className="card-id">{id}</h5> */}
            <h3 className="card-name">{name}</h3>
            <hr/>
            <p className="card-matchType"><b>MATCH TYPE:</b> {matchType}</p>
            <p className="card-status"><b>STATUS:</b> {status}</p>
            <p className="card-dateTimeGMT"><b>DATE/TIME:</b> {dateTimeGMT}</p>
            <p className="card-venue"><b>VENUE: </b>{venue}</p>
            <p className="card-score">{score}</p>
            
        </div>
</div>
      </div>
    )
  }
}
