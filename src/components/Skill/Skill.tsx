import React from 'react';
import styles from './styles.module.scss';

type Props = {
  skill: string,
};

const Skill: React.FC<Props> = ({skill}) => {
  return (    
    <div className={styles.skill}>
      {skill}
    </div>
  );
};

export default Skill;
