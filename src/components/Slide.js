import 'react-slideshow-image/dist/styles.css'
import React from 'react';
import { Slide } from 'react-slideshow-image';
import "./Slide.css"

const slideImages = [
  'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2019/04/eso1644bsmall.jpg',
  'https://i.imgur.com/iciNSQX.png',
  'https://image.winudf.com/v2/image/Y29tLnpvb3guZml4ZGVhZHBpeGVsc3R3b19zY3JlZW5fNV8xNTMyNDk4NjY2XzA0OQ/screen-5.jpg?fakeurl=1&type=.jpg'
];

const Slideshow = () => {
    return (
      <div>





        <Slide>
          <div className="each-slide ">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span className="arpt">Go my Fund is an online crowdfunding platform developped specifically for Investor. </span>
            </div>
          </div>
          <div className="each-slide ">
            <div className="xxx" style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span className="arpt" >Tunisie : La loi sur le <a href="https://cutt.ly/gd9oQxD">Crowdfunding</a> (financement participatif) adoptée</span>
            </div>
          </div>
          <div className="each-slide ">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span className="arpt">you can see ongoing of the projects by clicking on<li><a href="#projects">this button.</a></li></span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;