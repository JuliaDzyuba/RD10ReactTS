import React, { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../../App';
import styles from './styles.module.scss';

function Form() {
  const inputRef = useRef<HTMLInputElement>(null);
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    inputRef.current?.focus();
  },[]);

  return (    
    <div className={`container ${themeContext.theme}`}>
      <div className={styles.formWrapper}>
        <h2>Form</h2>
        <label htmlFor="input" className={styles.focusedInput}>
          <input ref={inputRef} type="text" placeholder='Enter something...'/>
        </label>
        </div>
    </div>
  );
}

export default Form;
