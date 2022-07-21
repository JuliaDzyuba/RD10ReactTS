import React from 'react';
import { IEducation } from '../../common/types/data.type';
import styles from './styles.module.scss';

type Props = {
  item: IEducation,
};

const EduItem: React.FC<Props> = ({item}) => {  
  return (    
    <li className={styles.item}>
      <h3>{item.institution} <span>{item.start} - {item.graduate}</span></h3>      
    </li>
  );
};

export default EduItem;
