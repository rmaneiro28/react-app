import { useState } from "react";
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "https://kit.fontawesome.com/162b8f619a.js";

export default function Todo({ item, onUpdate, onDelete}) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);
    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value)
    }

    function handleClickUpdateTodo() {
        onUpdate(item.id, newValue);
        setIsEdit(false);
    }
    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input type="text" className="todoInput" onChange={handleChange} />
        <button className="button" onClick={handleClickUpdateTodo}>Actualizar</button>
      </form>
    );
  }

  function TodoElement() {
    
    return (
      <div className="todoInfo">
        <span className="todoTitle"> {item.title} </span>
        <button className="button" onClick={() => setIsEdit(true)}><FontAwesomeIcon icon={faPenToSquare} /></button>
        <button className="buttonDelete" onClick={() => onDelete(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
      </div>
    );
  }
  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}