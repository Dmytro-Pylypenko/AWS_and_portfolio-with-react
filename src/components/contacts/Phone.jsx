import React from 'react';
import head from "../Header.module.css"

let Phone = () => {
    return (
        <div className={head.mail}>
            <a href="tel:+48728780263"><img className={head.phone} src= "assets/img/phone.png" alt="" />+48_72_87_80_263</a>
        </div>
    )

}




export default Phone;