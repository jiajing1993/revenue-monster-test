import React, { Component } from 'react'
import jsonp from 'jsonp';

import '../style/User.scss'

import HeadAndAns from '../components/HeadAndAns'
import SocialIcon from '../components/Socialcon'
import UserProject from '../components/UserProject'

const API_KEY = "yOEjVeOZZg7Wi9bkoW5t37K9GpaAdRnV"

export default class User extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: "",
      backgroundImage: "https://dmarket.com/blog/best-dota2-wallpapers/necr2_hu0883fe7709ec3660ed4d007aee51dffb_264928_1920x1080_resize_q75_box.jpg",
    }
  }

  componentDidMount(){
    const { match: { params } } = this.props;
    jsonp(`https://www.behance.net/v2/users/${params.id}?client_id=${API_KEY}` ,null,
    (err, data) => {
      this.setState({
        user: data.user
      })
    })
  }

  updateBackgroundImg = (image) => {
    console.log(image)
    this.setState({
      backgroundImage: image
    })
  }

  render() {
    const user = this.state.user
    const stat = user.stats
    console.log(user.images)
    if (this.state.user){
      return (
        <div className="user-profile-page" style={{ backgroundImage: `url(${this.state.backgroundImage})`}}>
          <div className="page-grip">
            <section className="personal"> 
              <div className="info">
                <div className="user">  
                  <img src={user.images['230']} alt=""/>
                  <div className="wrapper">
                    <p className="name">{user.username}</p>
                    <p>{`USER ID: ${user.id}`}</p>
                  </div>
                </div>
                <div className="stats">
                  <span className="stat">
                    <p>Appreciations</p>
                    <p>{stat.appreciations}</p>
                  </span>
                  <span className="stat">
                    <p>Following</p>
                    <p>{stat.following}</p>
                  </span>
                  <span className="stat">
                    <p>Followers</p>
                    <p>{stat.followers}</p>
                  </span>
                  <div className="feature">
                    { user.features.map((feature) => {
                      return (
                        <img src={feature.site.ribbon.image_2x} alt=""/>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="profile-section">
                <div className="social-section">
                  { user.social_links.map((social, index) => {
                    return (
                        <a href={social.url} key={social.id}> 
                              <SocialIcon name={social.service_name} />
                              <span>{social.value}</span>
                        </a>
                    )
                  })}
                </div>
              </div>
              <div className="details">
                <HeadAndAns head="Occupation" ans={user.occupation || "-"} />
                <HeadAndAns head="Location" ans={user.location || "-"} />
                <HeadAndAns head="Fields" ans={user.fields || "-"} />
                <HeadAndAns head="Company" ans={user.company || "-"} />
                <HeadAndAns head="About" ans={user.sections["Where, When and What"]} />
              </div>
            </section>
            <section className="projects">
              <UserProject id={user.id} handleBackgroundImage={this.updateBackgroundImg}/>
            </section>
          </div>
        </div>
      )
    }else {
      return <div>Loading</div>
    }
  }
}
