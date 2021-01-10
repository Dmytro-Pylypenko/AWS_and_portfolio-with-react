import React from 'react';
import Button from './button/Button';
import head from "./Header.module.css"
import Contacts from './contacts/Contacts';
import Projects from './project/Projects';
import Skills from './skills/Skills';
import Me from './me/Me';



class HeaderContainer extends React.Component {

    render() {
        return (
            <div>
                <div className={head.header}>
                    <h1 className={head.title}>Welcome to my portfolio page</h1>
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

