import React from "react";
import "./track.css";

class Track extends React.Component {
  renderAction() {
    isRemoval ? "-" : "+";
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3></h3>
          <p></p>
          <button className="Track-action">{this.renderAction}</button>
        </div>
      </div>
    );
  }
}

export default Track;
