import React from 'react';
import Email from './Email';
import Phone from './Phone';
import head from "../Header.module.css"
import ScrollUpButton from "react-scroll-up-button";

let Contacts = () => {
    return (
        <div className={head.contacts}>
            <div className={head.container}>
                <div className={head.contact}>
                    <Phone />
                    <Email />
                    <ScrollUpButton />
                </div>
            </div>
        </div>

    )
}


export default Contacts;