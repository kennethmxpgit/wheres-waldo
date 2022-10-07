import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Home from './components/Home.js';
import { Routes, Route } from "react-router-dom";
import Layout from'./components/Layout.js';
import { HashRouter, BrowserRouter } from "react-router-dom";



export default function App() {
  return (
      <Layout/>    
  );
}
