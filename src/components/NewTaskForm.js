import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';


const INITIAL_FORM_DATA = {
    title: '',
    description: ''
};

const NewTaskForm = ({ addTask }) => {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const handleChange = (event) => {
        console.log('change handler');
        const newFormData = {
            ...formData,
            [event.target.name]: event.target.value,
        };
        setFormData(newFormData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(formData);
        setFormData(INITIAL_FORM_DATA);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input 
                required
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />
            <label htmlFor="description">Description</label>
            <input 
                required
                type="text"
                id="desciption"
                name="description"
                value={formData.description}
                onChange={handleChange}
            />
            <input type="submit" value="submit" />
        </form>
    );

};

NewTaskForm.propTypes = {
    addTask: PropTypes.func.isRequired,
};

export default NewTaskForm;