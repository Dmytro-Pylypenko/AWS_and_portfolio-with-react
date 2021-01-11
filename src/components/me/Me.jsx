import React from 'react';
import me__style from "./me.module.css"

class Me extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <div id="me" className={me__style.container}>
                <div className={me__style.me__photo}>
                    <img src={publicUrl + "assets/img/me.jpg"} alt="" />
                </div>
                <div className={me__style.about__text}>
                    <p className={me__style.me__text}>I'm an enthusiastic and detail-oriented Frontend developer seeking an entry-level position with
                    Company to use my skills in coding, troubleshooting complex problems, and assisting in the timely
                          completion of projects.</p>
                </div>
            </div>
        )
    }
}

export default Me;