import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { PAGES } from './pages';
import App from '../components/app/app';
import EditPage from '../components/edit-page/edit-page';
import AddPage from '../components/add-page/add-page';
import Page404 from '../components/page404/page404';

const WrappedApp = (Component, props) => (
  <App >
    <Component { ...props } />
  </App>
);

export default () => (
  <Switch>
    <Route
      exact path={ PAGES.edit.path }
      render={ props => WrappedApp(EditPage, props) }
    />
    <Route
      exact path={ PAGES.add.path }
      render={ props => WrappedApp(AddPage, props) }
    />
    <Route
      exact path={ PAGES.page404.path }
      render={ props => WrappedApp(Page404, props) }
    />
    <Route
      path = '/'
      render={ () => (
        <Redirect to={ PAGES.page404.path } />
      ) }
    />
  </Switch>
);
