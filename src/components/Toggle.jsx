import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import '../styles/toggle.css';

export default function Toggle(props) {
    Toggle.propTypes = {
        onChange: PropTypes.func,
        value: PropTypes.string,
        name: PropTypes.string,
        checked: PropTypes.bool,
      }
    const toggle = useRef();
    const checkbox = useRef();
    
    function handleToggle() {
      if (props.onChange) props.onChange()
      toggle.current.classList.toggle('toggled')
      checkbox.current.checked = !checkbox.current.checked
    }
  
  return (
    <>
      <input
        ref={checkbox}
        name={props.name}
        className='toggle-checkbox'
        type='checkbox'
        defaultChecked={props.value}
        value={props.value ||false}
      />
      <span
        ref={toggle}
        onClick={handleToggle}
        className={props.checked ? 'toggled toggle-switch' : 'toggle-switch'}>
        <span className='toggle'></span>
      </span>
     </>
  )
}
