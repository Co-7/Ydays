import React from "react";
import "../styles/AppComponent.scss";

class AppComponent extends React.Component {
  total = 4;
  json = `[{"id":0,"child_id":[-1],"parent_id":[1,2],"status":"good","clip_url":"","row":0},{"id":1,"child_id":[0],"parent_id":[3],"status":"good","clip_url":"","row":1},{"id":2,"child_id":[0],"parent_id":[4],"status":"wrong","clip_url":"","row":1},{"id":3,"child_id":[1,5],"parent_id":[6],"status":"good","clip_url":"","row":2},{"id":4,"child_id":[2],"parent_id":[5],"status":"wrong","clip_url":"","row":2},{"id":5,"child_id":[4],"parent_id":[3],"status":"wrong","clip_url":"","row":3},{"id":6,"child_id":[3],"parent_id":[-1],"status":"good","clip_url":"","row":3}]`
  format_json = JSON.parse(this.json);
  render () {
    const rows = [];
    var rowsContent = [];

    for (var y = 0; y < this.total; y += 1) {
      rows[y] = [];
    };

    for (var i = 0; i < JSON.parse(this.json).length; i += 1) {
      rows[this.format_json[i].row].push(this.format_json[i].id);
    };

    for (var o = 0; o < rows.length; o += 1) {
      var blocks = [];
      for (var u = 0; u < rows[o].length; u += 1) {
        blocks.push(<BlockComponent key={u} id={rows[o][u]} />)
      }
      rowsContent.push(<RowComponent key={o} number={o} blocks={blocks} />);
    }

    return (
      <ParentComponent>
        {rowsContent}
      </ParentComponent>
    );
  }
}

const ParentComponent = props => (
  <div className="card calculator">
    <h1>Parent Comp</h1>
    <div id="children-pane">
      <svg><line id="line1"/></svg>
      {props.children}
    </div>
  </div>
);

const RowComponent = props => (
  <div className={`row ${props.number}`}>{props.blocks}</div>
);

const ChildComponent = props => (
  <div className={`child ${props.number}`}>
    {props.blocks}
  </div>
);

const BlockComponent = props => (
  <span id={`block_${props.id}`} className={`block`}>{props.id}</span>
);

export default AppComponent;
