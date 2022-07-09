import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { AppRoute } from './common/enum/app-route.enum';
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
}

const App: React.FC = () => {
  const [userData, setUserData] = useState<IData[]>([]);
  
  useEffect(() => {
    (async () => {
      const data = await fetchData('./data.json');
      if(data.length) {
        setUserData(data);
      }      
    })();
  }, []);

  const renderAvatar = () => <Avatar source={userData[0].avatar} username={userData[0].name}/>;

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path={AppRoute.ROOT} >
            <Home user={userData[0]} renderAvatar={renderAvatar}/>
          </Route>
          <Route exact path={AppRoute.ABOUT}>
            <About user={userData[0]}/>
          </Route>
          <Route exact path={AppRoute.EXPERIENCE}>
            <Experience user={userData[0]}/>
          </Route>
          <Route exact path={AppRoute.FORM} component={Form} />
          <Route path={AppRoute.ANY} component={NotFound} />
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
