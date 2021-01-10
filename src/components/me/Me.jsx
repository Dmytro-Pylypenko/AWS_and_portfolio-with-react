import React from 'react';
import head from "./me.module.css"

class Me extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
                <div id="me" className={head.container}>
                    <div className={head.me}>
                        <img src={publicUrl + "assets/img/me.jpg"} alt="" />
                    </div>
                </div>
        )
    }
}

export default Me;