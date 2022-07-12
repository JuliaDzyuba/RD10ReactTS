import React from 'react';
import { IEducation } from '../../common/types/data.type';
import EduItem from '../EduItem';
import styles from './styles.module.scss';

type Props = {
  educationList: IEducation[],
};

const EduList: React.FC<Props> = ({educationList}) => {
  return (    
    <ul className={styles.list}>
      {educationList?.map((item) => <EduItem key={item.id} item={item}/>)}
    </ul>
  );
};

export default EduList;
