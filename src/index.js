import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Nav from './templates/nav'
import Footer from './templates/footer'
import MainPage from './contents/main'
import UserPage from './contents/user'
import AboutPage from './contents/about'
import ContactPage from './contents/contact'


render((
  <Router history={browserHistory}>
  <Route path="/" component={Nav}>
       <IndexRoute component={MainPage} />
       <Route path="users"component={UserPage} />
       <Route path="about" component={AboutPage} />
       <Route path="contact" component={ContactPage} />
    </Route>
  </Router>
), document.getElementById('nav'))
render(<Footer/>, document.getElementById('footer'))
