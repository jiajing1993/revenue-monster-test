import React, { Component } from 'react'
import jsonp from 'jsonp';
import '../style/UserProject.scss'

const API_KEY = "yOEjVeOZZg7Wi9bkoW5t37K9GpaAdRnV"
const API_KEY2 = "LDGQKFP7dsmkhIKUAGG67ChSDASj1cWD"

export default class UserProject extends Component {
  constructor(props){
    super(props)
    this.state = {
      userProject: "",
    }
  }

  componentDidMount(){
    jsonp(`https://www.behance.net/v2/users/${this.props.id}/projects?client_id=${API_KEY}` ,null,
    (err, data) => {
      this.setState({
        userProject: data.projects
      })
    })
  }

  render() {
    const projects = this.state.userProject
    if (projects === ""){
      return (
        <div>
          <h1>Loading</h1>
        </div>
      )
    }else {
      return (
        <div className="feature-projects-list">
          <div className="feature-project">
            <img src={projects[0].covers['original']} alt=""/>
            <div className="project-details">
              <p>{projects[0].name}</p> 
            </div>
          </div>
          <div className="profile-section normal-project-list">
            { 
              projects.slice(1,15).map((project) => {
                return (
                  <div className="normal-project" key={project.id}>
                    <img src={project.covers['original']} alt=""/>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    }
  }
}
