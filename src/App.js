import React from 'react';
import {
  HashRouter,
  Route
} from 'react-router-dom'

import {
  Visibility,
} from 'semantic-ui-react';

import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import VisitPage from './containers/VisitPage'
import ClientDetailPage from './containers/ClientDetailPage'
import ClientIntakePage from './containers/ClientIntakePage'

import Footer from './components/Footer'
import Header from './components/Header'


// Change HashRouter tags below to Router tags to turn off hash routing; only used to be compatible with GitHub Pages

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fixHeader: false,
    }
  }

  render() {
    const { fixHeader } = this.state

    return(
      <div id='App'>
        <HashRouter>
          <div>
            <Visibility
              onTopPassed={ () => { this.setState({fixHeader: true}) } }
              onTopPassedReverse={ () => { this.setState({fixHeader: false}) } }
              once={ false }
            >
              <Header fix={ fixHeader } />
            </Visibility>

            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/visit/:clientId/:visitId" component={VisitPage}/>
            <Route path="/detail/:id" component={ClientDetailPage}/>
            <Route path="/intake" component={ClientIntakePage}/>

          </div>
        </HashRouter>
        <Footer />
      </div>
    )
  }
}

export default App;
