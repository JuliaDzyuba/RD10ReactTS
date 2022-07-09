import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';

function Form() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  },[]);

  return (    
    <div className="container">
      <h2>Form</h2>
      <label htmlFor="input" className={styles.focusedInput}>
        <input ref={inputRef} type="text" placeholder='Enter something...'/>
      </label>
    </div>
  );
}

export default Form;
