import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  // const [complete, setComplete] = useState(props.isComplete);
  const buttonClass = () => {
    if (props.isComplete) {
      return 'tasks__item__toggle--completed';
    } else {
      return '';
    }
  };

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass()}`}
        onClick={() => {props.changeComplete(props.id);}}
      >
        {props.title}
      </button>
      <button className="tasks__item__remove button" onClick={() => {props.deleteTask(props.id);}}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  changeComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
