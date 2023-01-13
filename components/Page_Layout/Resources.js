import React from "react";
import resourceData from "../../utils/resources";
import "../../css/index.css"

function NewResource(props) {
  const listOfLinks = [];
  for (const [index, value] of props.resource.links.entries()) {
    listOfLinks.push(
      <li key={index}>
        <a href={value} target="_blank" className="link">
          {value}
        </a>
      </li>
    );
  }

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <div
        style={{
          width: "8%",
          marginRight: 10
        }}
        className="w3-hide-small w3-col"
      >
        <img
          src={props.resource.image}
          alt={props.resource.alt}
          className="w3-round w3-image w3-opacity-min"
          width="80"
          height="80"
        />
      </div>
      <div
        style={{
          width: "85%",
          marginTop: "10px"
        }}
        className="w3-rest w3-content"
      >
        <h2 className="h2">{props.resource.name}</h2>
        <p className="paragraph-text">{props.resource.description}</p>
        {listOfLinks}
      </div>
      <br />
      <br></br>
    </div>
  );
}

export default function Resources() {
  const resourceList = resourceData.map(item => (
    <NewResource key={item.id} resource={item} />
  ));

  return <div className="paragraphText">{resourceList}</div>;
}
