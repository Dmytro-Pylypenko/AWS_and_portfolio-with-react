import React from 'react';
import Style from "./Button.module.css";
import {Link} from 'react-scroll'

class Button extends React.Component {
  render() {
    return (
      <div className={Style.button}>
        <Link  to="me" spy={true} smooth={true}>clickkkkk</Link>
      </div>

    )
  }
}


export default Button;

