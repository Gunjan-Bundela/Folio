import React from "react";
import { ProjectData } from "../../data/ProjectData";
import ProjectCard from "./ProjectCard";
import Carousel from "react-elastic-carousel";
import Separator from "../../common/socialContact/separator/Separator";

function Project() {
  const data = ProjectData;
  return (
    <div>
      <Separator />
      <div className="section-title">Projects</div>
      <div style={{marginTop:"30px"}}>
        <Carousel itemsToShow={1} enableAutoPlay autoPlaySpeed={2000}>
         <ProjectCard project={data[0]}/>
         <ProjectCard project={data[1]}/>
         <ProjectCard project={data[2]}/>
        </Carousel>
      </div>
    </div>
  );
}

export default Project;

// import React from 'react'
// import './Project.css';
// import {ProjectData} from '../../data/ProjectData'
// import ProjectCard from './ProjectCard';
// import Separator from '../../common/socialContact/separator/Separator';
// function Project() {
//     const data = ProjectData;
//     return (
//         <div className='projects'>
//             <Separator/>
//             <label className='section-title'>Projects</label>
//             <div>
//                 {
//                     data.map((project) => {
//                         return(
//                             <ProjectCard project={project}/>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

// export default Project
