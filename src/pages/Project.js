import React, { Component } from 'react'
import jsonp from 'jsonp';

import '../style/Project.css'

export default class Project extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: ""
    }
  }

  componentDidMount(){
    const { match: { params } } = this.props;
    jsonp(`https://www.behance.net/v2/users/${params.id}?client_id=LDGQKFP7dsmkhIKUAGG67ChSDASj1cWD` ,null,
    (err, data) => {
      console.log(data)
      this.setState({
        user: data.user
      })
    })
  }

  render() {
    const user = this.state.user
    const stat = user.stats
    console.log(user.images)
    if (this.state.user){
      return (
        <div className="project">
          <section className="personal"> 
            <div className="info">
              <h1>{user.username}</h1>
              <img src={user.images['230']} alt=""/>
            </div> 
            
            <p>{user.occupation}</p>
            <p>{user.location}</p>
            <p>{user.fields}</p>
            <p>{stat.followers}</p>
            <p>{stat.following}</p>
            <p>{stat.appreciations}</p>
            <p>{stat.views}</p>
            <p>{stat.comments}</p>
          </section>
          <section className="project">
            <p>{stat.views}</p>
            <p>{stat.comments}</p>
          </section>
        </div>
      )
    }else {
      return <div>Loading</div>
    }
  }
}
