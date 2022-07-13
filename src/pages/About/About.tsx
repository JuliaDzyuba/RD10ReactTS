import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import { IData } from '../../common/types/data.type';
import EduList from '../../components/EduList';
import Skill from '../../components/Skill';
import { getSkillsAmount } from '../../ulils/getSkillsAmount';
import styles from './styles.module.scss';

type AboutProps = {
  user: IData,
};

const About: React.FC<AboutProps> = ({user}) => {
  const themeContext = useContext(ThemeContext);

  return (    
    <div className={`container ${themeContext.theme}`}>
      <h2>About me</h2>
      <p className={styles.summary}>
        {user?.summary}
      </p>
      <h2>Skills</h2>
      <h3>Main stack ({getSkillsAmount(user?.skills.mainStack)}):</h3>
      <div className={styles.skills}>
        {user?.skills.mainStack.map((s) => <Skill key={s} skill={s}/>)}
      </div>
      <h3>Database:</h3>
      <div className={styles.skills}>
        {user?.skills.database.map((s) => <Skill key={s}  skill={s}/>)}
      </div>
      <h3>Additionally:</h3>
      <div className={styles.skills}>
        {user?.skills.additionally.map((s) => <Skill key={s}  skill={s}/>)}
      </div>
      <h3>English level: {user?.skills.englishLevel}</h3>
      
      <h2>Education</h2>
      <EduList educationList={user?.education}/>
    </div>
  );
};

export default About;
