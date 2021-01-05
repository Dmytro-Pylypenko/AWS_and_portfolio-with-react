import React from 'react';
import head from "./Header.module.css"
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

class Skills extends React.Component {
    render() {
        return (
                <div className={head.container}>
                    <h2 className={head.skills__title}>My Skills</h2>
                    <div className={head.skills}>
                        <div className={head.skill}>
                            <h3 className={head.skill__title}>Technologies</h3>
                            <div className={head.progress}>
                                <div style={{ width: '75%' }}>Html</div>
                                <Progress percent={75} />
                            </div>
                            <div className={head.progress}>
                                <div style={{ width: '70%' }}>Css</div>
                                <Progress percent={70} />
                            </div>
                            <div className={head.progress}>
                                <div style={{ width: '60%' }}>Bootstrap</div>
                                <Progress percent={60} />
                            </div>
                            <div className={head.progress}>
                                <div style={{ width: '55%' }}>Javascript</div>
                                <Progress percent={55} />
                            </div>
                            <div className={head.progress}>
                                <div style={{ width: '50%' }}>React-Redux</div>
                                <Progress percent={50} />
                            </div>
                            <div className={head.progress}>
                                <div style={{ width: '50%' }}>Gulp</div>
                                <Progress percent={50} />
                            </div>
                        </div>
                        <div className={head.skill}>
                            <h3 className={head.skill__title}>Technologies</h3>
                            <div className={head.progress}>
                                <div style={{ width: '75%' }}>Html</div>
                                <Progress percent={75} />
                            </div>
                            <div className={head.progress}>
                                <div style={{ width: '70%' }}>Css</div>
                                <Progress percent={70} />
                            </div>
                            <div className={head.progress}>
                                <div style={{ width: '60%' }}>Bootstrap</div>
                                <Progress percent={60} />
                            </div>
                            <div className={head.progress}>
                                <div style={{ width: '55%' }}>Javascript</div>
                                <Progress percent={55} />
                            </div>
                            <div className={head.progress}>
                                <div style={{ width: '50%' }}>React-Redux</div>
                                <Progress percent={50} />
                            </div>
                            <div className={head.progress}>
                                <div style={{ width: '50%' }}>Gulp</div>
                                <Progress percent={50} />
                            </div>
                        </div>
                        <div className={head.skill}>
                            <h3 className={head.skill__title}>Technologies</h3>
                            <div className={head.progress}>
                                <div style={{ width: '75%' }}>Html</div>
                                <Progress percent={75} />
                            </div>
                            <div className={head.progress}>
                                <div style={{ width: '70%' }}>Css</div>
                                <Progress percent={70} />
                            </div>
                            <div className={head.progress}>
                                <div style={{ width: '60%' }}>Bootstrap</div>
                                <Progress percent={60} />
                            </div>
                            <div className={head.progress}>
                                <div style={{ width: '55%' }}>Javascript</div>
                                <Progress percent={55} />
                            </div>
                            <div className={head.progress}>
                                <div style={{ width: '50%' }}>React-Redux</div>
                                <Progress percent={50} />
                            </div>
                            <div className={head.progress}>
                                <div style={{ width: '50%' }}>Gulp</div>
                                <Progress percent={50} />
                            </div>
                        </div>

                    </div>
                </div >

        )
    }
}
export default Skills;



