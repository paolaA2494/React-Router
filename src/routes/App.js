import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Layout from '../components/Layout';
import Main from '../components/Main';

function App() {
  return (
    <BrowserRouter>
       <Switch>
         <Layout>
             <Route exact path="/" component={Home} />
             <Route path="/main" component={Main} />
         </Layout>
       </Switch>
    </BrowserRouter>
  );
}

export default App;
