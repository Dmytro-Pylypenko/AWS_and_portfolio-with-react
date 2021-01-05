import React from 'react';
import head from "../Header.module.css"

let Email = () => {
    return (
        <div className={head.mail}>
            <a href="mailto:PylypenkoDima1@gmail.com"><img className={head.email} src= "assets/img/email.png" alt="" />PylypenkoDima1@gmail.com</a>
        </div>

    )
}

export default Email;