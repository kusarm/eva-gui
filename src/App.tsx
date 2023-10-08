// import {MemoryRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Page from './page';
import ReactDOM from "react-dom/client";
import React from "react";

export default function App() {
  return (
    <Page/>
  );
}

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(<App/>);
