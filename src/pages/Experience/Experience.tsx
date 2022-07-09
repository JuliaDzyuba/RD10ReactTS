import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import { IData } from '../../common/types/data.type';
import ExperienceItem from '../../components/ExperienceItem';
import styles from './styles.module.scss';

type Props = {
  user: IData,
}

const Experience: React.FC<Props> = ({user}) => {
  const themeContext = useContext(ThemeContext);
  return (    
    <div className={`container ${themeContext.theme}`}>
      <div className={styles.expWrapper}>
        <h2>Experience</h2>
        <ul className={styles.experience}>
          {user?.experience.map((exp) => <ExperienceItem experience={exp} key={exp.id} />)}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
