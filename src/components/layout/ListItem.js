import React from "react";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  console.log(props.item);
  return (
    <li className="nav-item">
      <Link to={"/" + props.item.link} className="nav-link">
        <img
          src={"./img/icons/" + props.item.image}
          alt={props.item.image.replace(".png", "")}
          className="nav-link-img"
        />
        {props.item.text}
      </Link>
    </li>
  );
};

export default ListItem;
