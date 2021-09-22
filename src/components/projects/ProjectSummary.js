import React from 'react';

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary" key={project.id}>
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">
                        <p>Posted by {project.authorFirstName}</p>
                        <p className="grey-text">3rd September, 2am</p>
                    </span>
                </div>
        </div>
    );
};

export default ProjectSummary;