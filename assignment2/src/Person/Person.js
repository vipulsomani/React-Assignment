import React from 'react';
import './Person.css';

const person = (props) => {
    return(
        <tr>
        <td> {props.name}</td>
        <td> {props.job}</td>
        </tr>
    )
};
export default person;