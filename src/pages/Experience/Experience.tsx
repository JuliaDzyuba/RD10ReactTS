import React from 'react';
import { IData } from '../../common/types/data.type';
import ExperienceItem from '../../components/ExperienceItem';
import styles from './styles.module.scss';

type Props = {
  user: IData,
}

const Experience: React.FC<Props> = ({user}) => {
  return (    
    <div className="container">
      <h2>Experience</h2>
      <ul className={styles.experience}>
        {user?.experience.map((exp) => <ExperienceItem experience={exp} key={exp.id} />)}
      </ul>
    </div>
  );
}

export default Experience;
