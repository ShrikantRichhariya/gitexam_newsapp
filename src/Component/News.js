import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
constructor(){
  super();
  console.log("heloo i am a constructor from news component");
  this.state={
    articles:[],
    loading: false
  }
}

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=665d27d387ae4cf99ea0daa691cd45d5";
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(data);
    this.setState({articles: parsedData.articles})

  }

  render() { 
    return (
        <div className="container my-3">
            <h1 className="firsthead">BRAKING NEWS TODAY</h1> 
            <div className="row"> 
            {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div> 
            })} 
       
      </div>

      </div>
    )
  }
}
export default News