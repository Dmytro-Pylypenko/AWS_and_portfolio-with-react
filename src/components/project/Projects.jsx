import React from "react";
import Carousel from "react-elastic-carousel";
import Style__projects from "./project.module.css"


const breakPoints = [
    { width: 1, itemsToShow: 1, infinity: true },
    { width: 550, itemsToShow: 1, itemsToScroll: 1, infinity: true },
];
class Projects extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';

        return (
            <div className={Style__projects.container} >
                <h2 className={Style__projects.projects__title}>My Projects</h2>

                <div className={Style__projects.projects}>
                    <Carousel breakPoints={breakPoints}>
                        <li>
                            <a className={Style__projects.project__title} href={publicUrl + "assets/project/marta/index.html"}><img className={Style__projects.list} src={publicUrl + "assets/img/project__1.svg"} alt="project_2">
                            </img>Marta</a>
                        </li>
                        <li>
                            <a className={Style__projects.project__title} href={publicUrl + "assets/project/gulp/index.html"}><img className={Style__projects.list} src={publicUrl + "assets/img/project__2.png"} alt="project_2">
                            </img>Gulp</a>
                        </li>
                        <li>
                            <a className={Style__projects.project__title} href={publicUrl + "assets/project/joom/index.html"}><img className={Style__projects.list} src={publicUrl + "assets/img/project__3.jpg"} alt="project_3">
                            </img>Joom</a>
                        </li>
                        <li>
                            <a className={Style__projects.project__title} href={publicUrl + "assets/project/vikings/index.html"}> <img className={Style__projects.list} src={publicUrl + "assets/img/project__5.png"} alt="project_4">
                            </img>Vikings</a>
                        </li>
                    </Carousel>
                </div>
            </div >
        )
    }



}

export default Projects;