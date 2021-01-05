import React from 'react';
import Button from './button/Button';
import head from "./Header.module.css"
import Contacts from './contacts/Contacts';
import Projects from './Projects';
import Skills from './Skills';
import Me from './Me';



class HeaderContainer extends React.Component {

    render() {
        return (
            <div>
                <div className={head.header}>
                    <h1 className={head.h}>Welcome to my portfolio page</h1>
                    <Button />
                </div>
                <Me />
                <Projects />
                <Skills />
                <Contacts />
            </div>
        );
    }
}

export default HeaderContainer;

