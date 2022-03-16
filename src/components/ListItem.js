import React from "react";

// Use props to add styles, link and images so that it looks like the reference image.

const ListItem = (props) => {
  console.log(props);
  console.log(props.element.icon);
  return (
    <div
      className="Listitem"
      style={{ backgroundColor: props.element.bgColor }}
    >
      <img src={props.element.icon} alt="" />
      <a href={props.element.link}>{props.element.name}</a>
    </div>
  );
};

export default ListItem;
