import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Home from './Home.js';
import LevelSelect from './LevelSelect.js';
import Play from './Play.js';
import { Routes, Route } from "react-router-dom";

export default function Layout(){
    return (
        <div>
          <Box width="100vw" height="95vh">
            <Routes>
              <Route  path={'/'} element={<Home/>}/>
              <Route  path={'/level'} element={<LevelSelect/>}/>
              <Route path={'/play/:id'} element={<Play/>}/>
            </Routes>
          </Box>
  
      </div>
    )
}