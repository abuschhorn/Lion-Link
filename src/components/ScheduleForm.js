import React, { useState } from "react";

export default function Schedule({ addClass }) {
  const [className, setClassName] = useState("");
  const [profName, setProfName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    addClass({ className, profName });
    setClassName("");
    setProfName("");
    // add classes
  };
  return (
    <div>
      <div className='form-inline' onSubmit={handleSubmit}>
        <input
          className='form-control'
          id='inlineFormInput'
          value={className}
          onChange={(event) => setClassName(event.target.value)}
          placeholder='Class Name'
        />
        <input
          className='form-control'
          id='inlineFormInput'
          value={profName}
          onChange={(event) => setProfName(event.target.value)}
          placeholder="Professor's Name"
        />
        <button onClick={handleSubmit} className='btn btn-add' type='button'>
          <svg
            width='1em'
            height='1em'
            viewBox='0 0 16 16'
            className='bi bi-plus-circle'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z'
            />
            <path
              fillRule='evenodd'
              d='M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z'
            />
            <path
              fillRule='evenodd'
              d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
