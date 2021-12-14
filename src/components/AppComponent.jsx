import React from "react";
import "../styles/AppComponent.scss";

class AppComponent extends React.Component {
  total = 4;
  json = `[{"id":0,"child_id":[-1],"parent_id":[1,2],"status":"good","clip_url":"","row":0},{"id":1,"child_id":[0],"parent_id":[3],"status":"good","clip_url":"","row":1},{"id":2,"child_id":[0],"parent_id":[4],"status":"wrong","clip_url":"","row":1},{"id":3,"child_id":[1,5],"parent_id":[6],"status":"good","clip_url":"","row":2},{"id":4,"child_id":[2],"parent_id":[5],"status":"wrong","clip_url":"","row":2},{"id":5,"child_id":[4],"parent_id":[3],"status":"wrong","clip_url":"","row":3},{"id":6,"child_id":[3],"parent_id":[-1],"status":"good","clip_url":"","row":3}]`

  render () {
    const children = [];
    const blocks = [];

    for (var i = 0; i < JSON.parse(this.json).length; i += 1) {
      blocks.push(<BlockComponent key={i} id={JSON.parse(this.json)[i].id} />);
    };

    for (var y = 0; y < this.total; y += 1) {
      children.push(<ChildComponent key={y} number={y} blocks={blocks} />);
    };

    return (
      <ParentComponent>
        {children}
      </ParentComponent>
    );
  }
}

const ParentComponent = props => (
  <div className="card calculator">
    <h1>Parent Comp</h1>
    <div id="children-pane">
      {props.children}
    </div>
  </div>
);

const ChildComponent = props => (
  <div className={`child ${props.number}`}>
    {props.blocks}
  </div>
);

const BlockComponent = props => (
  <span className="block">{props.id}</span>
);

export default AppComponent;
