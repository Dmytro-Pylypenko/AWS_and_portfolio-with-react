import React from 'react';
import head from "./contacts.module.css"

let Email = () => {
    return (
        <div className={head.mail}>
            <a href="mailto:PylypenkoDima1@gmail.com"><img className={head.img__email} src= "assets/img/email.png" alt="" />PylypenkoDima1@gmail.com</a>
        </div>

    )
}

export default Email;