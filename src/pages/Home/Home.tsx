import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import { IData } from '../../common/types/data.type';
import styles from './styles.module.scss';

type HomeProps = {
  user: IData,
  renderAvatar: () => JSX.Element,
}

const Home: React.FC<HomeProps> = ({user, renderAvatar}) => {
  const themeContext = useContext(ThemeContext);
  return (    
    <div className={`container ${themeContext.theme}`}>
      <div className={styles.homeWrapper}>
        <h2>Hi, I am {user?.name}</h2>
        <div className={styles.avatar}>
          {renderAvatar && renderAvatar()}
        </div>
        <p className={styles.role}>{user?.currentRole}</p>
        </div>      
    </div>
  );
}

export default Home;
