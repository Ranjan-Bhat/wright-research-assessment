import React from 'react';
import './App.css';
import { BlogForm } from "./component/BlogForm";


function App() {  
  return (
    <div className="container">
      <h1>Create a Blog</h1>
      <BlogForm />
    </div>
  );
};

export default App;