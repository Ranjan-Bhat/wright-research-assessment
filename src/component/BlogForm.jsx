import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleContentChange = (value) => {
        setContent(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform local validations
        if (!title || !description || !content) {
            alert('Please fill in all fields');
            return;
        } else{
            alert('Form submitted!!');
        }


        // Display blog data
        console.log('Title:', title);
        console.log('Description:', description);
        console.log('Content:', content);

        // Clear form fields
        setTitle('');
        setDescription('');
        setContent('');
    };


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={handleTitleChange}
                />
                </div>
                <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                    type="text"
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                ></textarea>
                </div>
                <div className="form-group">
                <label htmlFor="content">Content:</label>
                <ReactQuill
                    id="content"
                    value={content}
                    onChange={handleContentChange}
                />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
