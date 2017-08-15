import React from 'react';
import ReactDOM from 'react-dom';
require("../sass/style.scss");
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import { TransitionGroup } from 'react-transition-group' // ES6


function ImageCarousel(props) {
  return (
    <div>
      <CSSTransitionGroup
        // transitionAppear={true}
        // transitionAppearTimeout={1000}
        transitionName="carousel"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}>
        <img src={props.imageSrc} key={props.imageSrc} />
      </CSSTransitionGroup>
    </div>
  )
}

class Carousel extends React.Component{
  constructor(props){
    super(props)
    this.state={
      imageSrc:[
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/4.jpg",
      ],
      currentIndex:0
    }
  }

  componentDidMount(){
    this.timer = setInterval(
      ()=>{
        this.setState({currentIndex: (this.state.currentIndex + 1)% 4 })
      }
      ,3000)
  }


  render(){
    return(
      <div  className="carousel">
      <ImageCarousel imageSrc = {this.state.imageSrc[this.state.currentIndex]} />
      </div>
    )
  }
}


ReactDOM.render(
  <Carousel />,
  document.getElementById('app')
);
