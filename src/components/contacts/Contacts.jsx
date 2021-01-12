import React from 'react';
import Email from './Email';
import Phone from './Phone';
import head from "./contacts.module.css";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

let Contacts = () => {
    return (
        <div className={head.contacts}>
            <div className={head.container}>
                <div className={head.contact}>

                    <Phone />

                    <Email />
                </div>
            </div>
            <ScrollUpButton />
        </div>

    )
}


export default Contacts;