import React from "react";
import './button.css'
import Radium, { StyleRoot } from 'radium';

const Button = () => {
  return (
    <StyleRoot>
      <button>Request Invite</button>
    </StyleRoot>
  )
}

export default Radium(Button);