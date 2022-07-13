import React, { useEffect, useRef, useContext, useMemo } from 'react';
import { ThemeContext } from '../../App';
import { IData } from '../../common/types/data.type';
import useInput from '../../hooks/inputHook';
import Counter from './Counter/Counter';
import styles from './styles.module.scss';

type Props = {
  users: IData[],
};

const Form: React.FC<Props> = ({ users }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const themeContext = useContext(ThemeContext);

  const input = useInput('');

  useEffect(() => {
    inputRef.current?.focus();
  },[]);

  const counter = useMemo(() => {
    return users.length;    
  }, [users]);

  return (    
    <div className={`container ${themeContext.theme}`}>
      <div className={styles.formWrapper}>
        <h2>Form</h2>
        <label htmlFor="input" className={styles.focusedInput}>
          <input ref={inputRef} type="text" placeholder='First input...'/>
        </label>
        <label htmlFor="second" className={styles.focusedInput}>
          <input
            type="text"
            placeholder='Second input...'
            id='second'
            value={input.value}
            onChange={input.onChange}
          />
          <span>{input.error}</span>
        </label>
        <hr />
        <Counter counter={counter}/>
      </div>
    </div>
  );
};

export default Form;
