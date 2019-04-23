import React, { Component } from 'react';
import jsonp from 'jsonp';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: "anime",
      cards: [],
      selectedCard: null,
    }
  }

  componentDidMount(){
    jsonp(`http://www.behance.net/v2/projects?q=${this.state.query}&client_id=LDGQKFP7dsmkhIKUAGG67ChSDASj1cWD` ,null,
      (err, data) => {
        console.log(data)
        this.setState({
          cards: data.projects
        })
      })
  }

  handleClick = (index) => {
    console.log(index)
    this.setState({
      selectedCard: this.state.cards[index]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="sidebar">
          {
            this.state.selectedCard && (
              <div className="sidebar-container">
                <img src={this.state.selectedCard.covers['404']} alt=""/>
                <p className="name">{ this.state.selectedCard.name }</p>
                <p className="description">
                  Raigor Stonehoof, the Earthshaker, is a melee strength hero with several area of effect (AoE) disables, commonly played as a ganker or initiator.
                </p>
                <div className="actions">
                  <div className="like">{ this.state.selectedCard.stats.views }</div>
                  <div className="seen">{ this.state.selectedCard.stats.appreciations }</div>
                  <div className="comment">{ this.state.selectedCard.stats.comments }</div>
                </div>
                <a href={this.state.selectedCard.url} className="view-more" target="_blank">Lock In</a>
              </div>
            )
          }
        </div>
        <div className="card-list">
          {
            this.state.cards.map((card, index) => {
              let className = 'card';
              if (card === this.state.selectedCard) {
                className += ' selected';
              }
              return (
                <div className={className} key={card.id} onClick={() => this.handleClick(index)} style={{ backgroundImage: `url(${card.covers['404']})`}}>
                </div>
              )
            })
          }      
        </div>
      </div>
    );
  }
}

export default App;
