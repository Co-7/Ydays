import React from "react";
import "../styles/Backoffice.scss";
// import UploadBlock from '../components/UploadBlock'
// import Choice from '../components/Choice'
import AppComponent from '../components/AppComponent'
const json = `[{"id":0,"child_id":[-1],"parent_id":[1,2],"status":"good","clip_url":"","row":0},{"id":1,"child_id":[0],"parent_id":[3],"status":"good","clip_url":"","row":1},{"id":2,"child_id":[0],"parent_id":[4],"status":"wrong","clip_url":"","row":1},{"id":3,"child_id":[1,5],"parent_id":[6],"status":"good","clip_url":"","row":2},{"id":4,"child_id":[2],"parent_id":[5],"status":"wrong","clip_url":"","row":2},{"id":5,"child_id":[4],"parent_id":[3],"status":"wrong","clip_url":"","row":3},{"id":6,"child_id":[3],"parent_id":[-1],"status":"good","clip_url":"","row":3}]`

function Backoffice() {
    JSON.parse(json).forEach(element => {     
        console.log(element); 
    })
    return (
      <div id="backoffice">
        <AppComponent></AppComponent>
        {/* <div id="start_node"></div>
        <span className="line"></span>

        

        <UploadBlock></UploadBlock>
        <Choice></Choice> */}
      </div>
    );
}

export default Backoffice;
