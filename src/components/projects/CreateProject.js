import React, { useState } from 'react';
import { ProjectContext } from '../../contexts/ProjectContext';
import { useContext } from 'react';
import { v4 as uuidv4 } from "uuid";
import { useHistory } from 'react-router';

const CreateProject = () => {

    const history = useHistory();
    const {addProject} = useContext(ProjectContext);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleChange = (e) =>{
        if(e.target.id === 'title'){
            setTitle(e.target.value);
        }else if(e.target.id === 'content'){
            setContent(e.target.value);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const project = {authorFirstName:'Tahmid',authorLaststName:'Ferdous',title: title,content: content,id:uuidv4()};
        addProject(project);
        history.push('/');
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h4 className="grey-text text-darken-3">Create</h4>
                <br />

                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={title} onChange={handleChange} />
                </div>

                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea  id="content" value={content} onChange={handleChange} className="materialize-textarea"></textarea>
                </div>

                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    );
};

export default CreateProject;