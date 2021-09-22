import { createContext,useState,useEffect } from "react";
import firebase from "../../src/fb/fbConfig"

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
    
    const [projects, setProjects] = useState([]);
    const ref = firebase.firestore().collection("projects");
    const [loading, setLoading] = useState(false);
    
    const addProject = (project) =>{
        firebase.firestore().collection('projects').add(project);
    }
    const getProjects = () => {
      setLoading(true);
      ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setProjects(items);
        setLoading(false);
      });
    }
    
      useEffect(() => {
        getProjects();
        // eslint-disable-next-line
      }, []);
    
    return (
        <ProjectContext.Provider value={{projects,addProject,getProjects,loading}}>
            {props.children}
        </ProjectContext.Provider>
    );
};

export default ProjectContextProvider;