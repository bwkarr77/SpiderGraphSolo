import React from "react";
import { RadarChart2 } from "./RadarChart2";
import { ButtonToolbar, DropdownButton, Dropdown } from "react-bootstrap";

const graphDropdown = "Graph Drop Down";

const renderGraph = params => {
  switch (params) {
    case "Radar":
      console.log("Radar");
      break;
    case "Bar":
      console.log("Bar");
      break;
    case "Line":
      console.log("line");
      break;
    default:
      console.log("Spider-Default");
      break;
  }
};

const graphNames = ["Radar", "Bar", "Line"];

const Graphs = () => {
  return (
    <div>
      <div>
        <DropdownButton
          title={graphDropdown}
          id={`dropdown-variants-${graphDropdown}`}
          key={graphDropdown}
          className="dropdown-button"
        >
          <div className="dropdown-option-show">
            {graphNames.map((graphName, index) => (
              <Dropdown.Item
                eventKey={`${index + 1}`}
                onClick={() => renderGraph(graphName)}
              >
                {graphName}
              </Dropdown.Item>
            ))}
          </div>
        </DropdownButton>
      </div>
      {/* "Display the graph from choice" */}
    </div>
  );
};

export default Graphs;
