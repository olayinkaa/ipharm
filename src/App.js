import React, {Fragment} from 'react'
import Registration from './views/Registration';
import { Switch,Route } from 'react-router-dom';
import SuccessPage from './views/SuccessPage';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Registration}/>
        <Route exact path="/success-page" component={SuccessPage} />
      </Switch>
    </Fragment>
  )
}

export default App

