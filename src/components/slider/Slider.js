import React from "react";
import Carousel from "react-elastic-carousel";
// import Slider from "react-slick";
import Item from "./Item";
import fl from "./slider.module.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
];

class Slide extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';

    return (
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <div className={fl.f}> <li>
            <a href={publicUrl + "assets/project/marta/index.html"}><img src={publicUrl + "assets/img/project__1.svg"} alt="project_2">
            </img>Marta</a>
          </li></div>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
        </Carousel>
      </div>
    );
  }
}

export default Slide;