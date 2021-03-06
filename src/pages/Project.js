import React, { Component } from 'react'
import * as data from "../data/project.json"

import '../style/Project.scss'
import HeadAndAns from '../components/HeadAndAns'


export default class Project extends Component {
  constructor(props){
    super(props)
    this.state = {
      backgroundImage: "https://dmarket.com/blog/best-dota2-wallpapers/necr2_hu0883fe7709ec3660ed4d007aee51dffb_264928_1920x1080_resize_q75_box.jpg",
    }
  }
  render() {
    return (
      <div className="project-page" style={{ backgroundImage: `url(${data.project.modules[1].sizes['1400']})`}}>
        <div className="page-grip">
          <section className="gallery">
            {
              data.project.modules.map((module) => {
                if (module.type === "image"){
                  return (
                    <img src={module.sizes['1400']} alt=""/>
                  )
                }
              })
            }
          </section>
          <div className="gap"></div>
          <section className="info">
            <p className="project-name">{data.project.name}</p>
            {
              data.project.fields.map((field)=> {
                return (
                  <span className="project-field">{ field }</span>
                )
              })
            }
            <div className="stat-list">
            <span className="stat appreciation">
                <svg viewBox="0 0 511.626 511.626">
                  <path d="M477.371 127.44c-22.843-28.074-53.871-50.249-93.076-66.523-39.204-16.272-82.035-24.41-128.478-24.41-34.643 0-67.762 4.805-99.357 14.417-31.595 9.611-58.812 22.602-81.653 38.97-22.845 16.37-41.018 35.832-54.534 58.385C6.757 170.833 0 194.484 0 219.228c0 28.549 8.61 55.3 25.837 80.234 17.227 24.931 40.778 45.871 70.664 62.811-2.096 7.611-4.57 14.846-7.426 21.693-2.855 6.852-5.424 12.474-7.708 16.851-2.286 4.377-5.376 9.233-9.281 14.562-3.899 5.328-6.849 9.089-8.848 11.275-1.997 2.19-5.28 5.812-9.851 10.849-4.565 5.048-7.517 8.329-8.848 9.855-.193.089-.953.952-2.285 2.567-1.331 1.615-1.999 2.423-1.999 2.423l-1.713 2.566c-.953 1.431-1.381 2.334-1.287 2.707.096.373-.094 1.331-.57 2.851-.477 1.526-.428 2.669.142 3.433v.284c.765 3.429 2.43 6.187 4.998 8.277 2.568 2.092 5.474 2.95 8.708 2.563 12.375-1.522 23.223-3.606 32.548-6.276 49.87-12.758 93.649-35.782 131.334-69.097 14.272 1.522 28.072 2.286 41.396 2.286 46.442 0 89.271-8.138 128.479-24.417 39.208-16.272 70.233-38.448 93.072-66.517 22.843-28.062 34.263-58.663 34.263-91.781.001-33.119-11.418-63.718-34.254-91.787z"/>
                </svg>
                <span>{data.project.stats.appreciations}</span>
              </span>
              <span className="stat comment">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.997 51.997">
                  <path d="M51.911 16.242c-.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906C6.759 1.826.845 7.887.087 16.241c-.06.369-.306 2.311.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014.748-3.166.502-5.108.443-5.477z"/>
                </svg>
                <span>{data.project.stats.comments}</span>
              </span>
              <span className="stat view">
                <svg viewBox="0 0 488.85 488.85">
                  <path d="M244.425 98.725c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z"/>
                </svg>
                <span>{data.project.stats.views}</span>
              </span>
            </div>
            <div className="about">
              <HeadAndAns head="Description" ans={data.project.description} />
              <HeadAndAns head="Created At" ans={data.project.created_on} />
            </div>
            
            <div className="owner-list">
              {
                data.project.owners.map((owner) => {
                  return (
                    <div className="owner">
                      <img src={owner.images['230']} alt=""/>
                      <p className="owner-name">{owner.username}</p>
                    </div>        
                  )
                })
              }
            </div>
        </section>
        </div>
        
      </div>
    )
  }
}
