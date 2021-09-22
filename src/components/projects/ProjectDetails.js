import React,{useContext} from 'react';
import { useParams } from 'react-router';
import { ProjectContext } from '../../contexts/ProjectContext';

const ProjectDetails = () => {

    const { id } = useParams();
    const {projects} = useContext(ProjectContext);
    const project = projects.filter(project => project.id===id);


    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {project[0].title}</span>
                    <p>{project[0].content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Tahmid</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;