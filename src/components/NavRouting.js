import React from 'react';
import { Route } from 'react-router-dom';
import UploadForm from '../components/UploadForm';
import Dashboard from '../components/Dashboard';
import EditForm from '../components/EditForm';
import Story from '../components/Stories';

const NavRouting = () => {

    return (
        <div>
            <Route
            path='/stories/:id'
            component={Story}
            />
            <Route path='/upload' component={UploadForm}/>
            <Route path='/edit/:id' component={EditForm}/>
            <Route path='/dashboard' component={Dashboard}/>
        </div>
    );
};

export default NavRouting;