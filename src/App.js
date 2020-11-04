import React, {Fragment} from 'react'
import Registration from './views/Registration';
import { Switch,Route } from 'react-router-dom';
import SuccessPage from './views/SuccessPage';
import PreRegistration from './views/PreRegistration';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={PreRegistration}/>
        <Route exact path="/register" component={Registration}/>
        <Route exact path="/success-page" component={SuccessPage} />
      </Switch>
    </Fragment>
  )
}

export default App

