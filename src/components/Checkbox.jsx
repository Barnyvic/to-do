import React from "react";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

function Checkbox({ done, onClicked }) {
  return (
    <div onClick={onClicked}>
      <div>
        {done && done ? (
          <RiCheckboxCircleLine className="icon" />
        ) : (
          <RiCheckboxBlankCircleLine className="icon" />
        )}
      </div>
    </div>
  );
}

export default Checkbox;
