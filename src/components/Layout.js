import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Home from './Home.js';
import LevelSelect from './LevelSelect.js';
import Play from './Play.js';
import { Route,Routes } from "react-router";
import { HashRouter,BrowserRouter } from 'react-router-dom';

export default function Layout(){
    return (
        <div>
          <HashRouter>
          <Box width="100vw" height="95vh">
            <Routes>
              
              <Route path={'/level'} element={<LevelSelect/>}/>
              <Route exact path={'/play/:id'} element={<Play/>}/>
              <Route  path={'/'} exact element={<Home/>}/> 
            </Routes>
          </Box>
          </HashRouter>
      </div>
    )
}