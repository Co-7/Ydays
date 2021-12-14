import React, { useState, useRef } from "react";
import ReactFlow, { ReactFlowProvider, addEdge, removeElements, Controls } from "react-flow-renderer";
import "../styles/Backoffice.scss";
import Sidebar from "../components/Sidebar";
const json = `[{"id":0,"child_id":[-1],"parent_id":[1,2],"status":"good","clip_url":"","row":0},{"id":1,"child_id":[0],"parent_id":[3],"status":"good","clip_url":"","row":1},{"id":2,"child_id":[0],"parent_id":[4],"status":"wrong","clip_url":"","row":1},{"id":3,"child_id":[1,5],"parent_id":[6],"status":"good","clip_url":"","row":2},{"id":4,"child_id":[2],"parent_id":[5],"status":"wrong","clip_url":"","row":2},{"id":5,"child_id":[4],"parent_id":[3],"status":"wrong","clip_url":"","row":3},{"id":6,"child_id":[3],"parent_id":[-1],"status":"good","clip_url":"","row":3}]`;

const initialElements = [
  {
    id: "1",
    type: "input", // input node
    data: {
      label: "Input Node",
    },
    position: {
      x: 200,
      y: 0,
    },
    test: "test",
  },
  // default node
  {
    id: "2",
    // you can also pass a React component as a label
    data: {
      label: (
        <div>
          {" "}
          Default Node <input type="text" placeholder="test" />{" "}
        </div>
      ),
    },
    position: {
      x: 100,
      y: 125,
    },
  },
  {
    id: "3",
    // you can also pass a React component as a label
    data: {
      label: (
        <div>
          {" "}
          Default Node{" "}
        </div>
      ),
    },
    position: {
      x: 100,
      y: 125,
    },
  },
  {
    id: "4",
    type: "output", // output node
    data: {
      label: "Output Node",
    },
    position: {
      x: 250,
      y: 250,
    },
  },
  // animated edge
  {
    id: "e1-2",
    source: "1",
    target: "2",
    style: {
      stroke: "red",
    },
    type: "step",
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    style: {
      stroke: "red",
    },
    type: "step",
  },
  {
    id: "e1-4",
    source: "1",
    target: "4",
    type: "step",
  },
];

const getId = () => initialElements.length+2;

function Backoffice() {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);

  // ? Au chargement on defini l'instance de reactFlow
  const onLoad = (_reactFlowInstance) => 
    setReactFlowInstance(_reactFlowInstance);

  // ? A la connexion d'un noeud a un autre
  const onConnect = (_reactFlowInstance) => 
    console.log(_reactFlowInstance);

  // ? Listener sur le mouvement de Drag au dessus de l'instance
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  // ? Au moment du drop sur l'instance
  const onDrop = (event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();const type = event.dataTransfer.getData('application/reactflow');
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const newNode = {
      id: getId(),
      type,
      position,
      data: { label: `${type} node` },
    };

    setElements((es) => es.concat(newNode));
  }

  return (
    <div>
      <div
        style={{
          height: "calc(100vh - 200px)",
          width: "calc(100vw - 80px)",
          border: "1px solid black",
        }}
        ref={reactFlowWrapper}
      >
        <ReactFlow elements={elements} onLoad={onLoad} onConnect={onConnect} onDrop={onDrop} onDragOver={onDragOver}/>{" "}
      </div>{" "}
      <Sidebar> </Sidebar>{" "}
    </div>
  );
}

export default Backoffice;
