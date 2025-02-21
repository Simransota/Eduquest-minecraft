// Blogcard.jsx

import React, { Component } from 'react';
import "./style.css"
export class BlogCard extends Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
    this.flip = this.flip.bind(this);
  }

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  }

  render() {
    return (
      <div className="page-container">
        <div onMouseEnter={this.flip} onMouseLeave={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>
          <Front />
          <Back />
        </div>
        
      </div>
    );
  }
}

class Front extends Component {
  render() {
    return (
      <div className="front">
        <ImageArea />
        <MainArea />
      </div>
    );
  }
}

class Back extends Component {
  render() {
    return (
      <div className="back">
        <p>Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post.</p>
        <p>Bloggity bloggity bloggity blog. This would be the full text of the abbreviated blog post.</p>
      </div>
    );
  }
}

class ImageArea extends Component {
  render() {
    return (
      <div className="image-container">
        <img className="card-image" src="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png" alt="Blog post" />
        <h1 className="title">An example blog post</h1>
      </div>
    );
  }
}

class MainArea extends Component {
  render() {
    return (
      <div className="main-area">
        <div className="blog-post">
          <p className="date">{new Date().toLocaleDateString()}</p>
          <p className="blog-content">
            Some sample text to demonstrate how these cards will work, including how they truncate long sentences.
          </p>
          <p className="read-more">Hover to read more...</p>
        </div>
      </div>
    );
  }
}
