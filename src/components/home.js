import React, { Component } from "react";

import SlidesShow from './Slide'
import MoviesList from "../projectList";
export default class Home extends Component {
  render() {
    return (
      <div>
         <SlidesShow/>
         <section id="projects">
        <MoviesList />
        </section>
      </div>
    );
  }
}

