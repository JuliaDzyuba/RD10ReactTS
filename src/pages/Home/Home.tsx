import React from 'react';
import { IData } from '../../common/types/data.type';
import styles from './styles.module.scss';

type HomeProps = {
  user: IData,
  renderAvatar: () => JSX.Element,
}

const Home: React.FC<HomeProps> = ({user, renderAvatar}) => {
  return (    
    <div className="container">
      <h2>Hi, I am {user?.name}</h2>
      <div className={styles.avatar}>
        {renderAvatar && renderAvatar()}
      </div>
      <p className={styles.role}>{user?.currentRole}</p>
    </div>
  );
}

export default Home;
