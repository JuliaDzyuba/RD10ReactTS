import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { AppRoute, AppTheme } from './common/enum';
import { IData } from './common/types/data.type';
import Avatar from './components/Avatar';
import Header from './components/Header';
import About from './pages/About';
import Experience from './pages/Experience';
import Form from './pages/Form';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const fetchData = async (url: string): Promise<IData[]> => {  
  const response = await fetch(url);
  const data = await response.json();
  return data;  
};

export const ThemeContext = React.createContext<{
  theme: string,
  toggleTheme: () => void,
}>({
  theme: AppTheme.LIGHT,
  toggleTheme() {},
});

const App: React.FC = () => {
  const [usersData, setUsersData] = useState<IData[]>([]);
  const [appTheme, setTheme] = useState<string>(AppTheme.LIGHT);
  
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchData('./data.json');
        if(data.length) {
          setUsersData(data);
        }      
      } catch (error) {
        console.log(error);        
      }      
    })();
  }, []);

  const renderAvatar = () => <Avatar source={usersData[0]?.avatar} username={usersData[0]?.name}/>;

  const toggleTheme = () => {
    if(appTheme === AppTheme.LIGHT) {
      setTheme(AppTheme.DARK);
    } else {
      setTheme(AppTheme.LIGHT);
    }    
  };

  const addUser = () => {
    setUsersData([...usersData, {
      name: 'new User',
      currentRole: 'user',
      avatar: 'https://via.placeholder.com/300',
      summary: '',
      education: [],
      experience: [],
      skills: {
        mainStack: ['rr'],
        database: ['rr'],
        additionally: ['rr'],
        englishLevel: 'rr',
      },
    }])
  };

  return (
    <div className={`App ${appTheme}`}>
      <ThemeContext.Provider value={{
        theme: appTheme,
        toggleTheme: toggleTheme,
      }}>
        <Router>
          <Header />
          <button type="button" onClick={addUser}>Add user</button>
          <Switch>
            <Route exact path={AppRoute.ROOT} >
              <Home user={usersData[0]} renderAvatar={renderAvatar}/>
            </Route>
            <Route exact path={AppRoute.ABOUT}>
              <About user={usersData[0]}/>
            </Route>
            <Route exact path={AppRoute.EXPERIENCE}>
              <Experience user={usersData[0]}/>
            </Route>
            <Route exact path={AppRoute.FORM} >
              <Form users={usersData}/>
            </Route>
            <Route path={AppRoute.ANY} component={NotFound} />
          </Switch>
        </Router>
      </ThemeContext.Provider>    
    </div>
  );
};

export default App;
