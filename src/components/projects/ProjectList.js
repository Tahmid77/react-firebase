import ProjectSummary from './ProjectSummary';
//import firebase from '../../fb/fbConfig';
import { ProjectContext } from '../../contexts/ProjectContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const ProjectList = () => {
    //const ref = firebase.firestore().collection("schools");
    const {projects,loading} = useContext(ProjectContext);

    const projectList = projects.map(project=>(
            <Link key={project.id}  to={`/project/${project.id}`}><ProjectSummary project={project}/></Link>
        ))

    return (
        <div className="project-list section">

            {loading ? <h1>loading...</h1> : projectList}
        
        </div>
    );
};

export default ProjectList;