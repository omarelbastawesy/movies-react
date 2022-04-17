import React from "react";
// styles
import { Wraper } from "./button.styles";

const Button = ({ text, callback }) => (
  <Wraper type="button" onClick={callback}>
    {text}
  </Wraper>
);

export default Button;
