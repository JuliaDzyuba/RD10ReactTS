import React from 'react';
import { IExperience } from '../../common/types/data.type';
import styles from './styles.module.scss';

type Props = {
  experience: IExperience,
};

const ExperienceItem: React.FC<Props> = ({experience}) => {
  return (    
    <li className={styles.experience}>
      <h3>{experience.organization} - {experience.role}</h3> 
      <span>{experience.start} - {experience.finish}</span>
      <p>{experience.duties}</p>
    </li>
  );
};

export default ExperienceItem;
