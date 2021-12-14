import React from "react";
import "../styles/Choice.scss";

class Choice extends React.Component {
  render() {
    return (
      <div>
        <div className="choice_next">
          <span className="next">Add</span>
          <span className="next">End Wrong</span>
          <span className="next">End</span>
        </div>
        {/* <div className="choice_number">
          <span>⏎</span>
          <span className="number">1</span>
          <span className="number">2</span>
        </div> */}
      </div>
    );
  }
}

export default Choice;
