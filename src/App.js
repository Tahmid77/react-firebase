import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import CreateProject from './components/projects/CreateProject';
import ProjectDetails from './components/projects/ProjectDetails';
import AuthContextProvider from './contexts/AuthContext';
import ProjectContextProvider from './contexts/ProjectContext';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ProjectContextProvider>
          <Switch>
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route path="/project/:id" >
              <ProjectDetails />
            </Route>
            <AuthContextProvider>
            <Route path="/signin" >
              <SignIn />
            </Route>
            <Route path="/signup" >
              <SignUp />
            </Route>
            </AuthContextProvider>
            <Route path="/create" >
                <CreateProject />
            </Route>
          </Switch>
          </ProjectContextProvider>
      </div>
    </Router>
  );
}

export default App;
