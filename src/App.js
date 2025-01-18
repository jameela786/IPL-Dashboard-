import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import LatestMatch from './components/LatestMatch'
import MatchCard from './components/MatchCard'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/team-matches/:id" component={TeamMatches} />
    <Route exact path="/latestmatch" component={LatestMatch} />
    <Route exact path="/matchcard" component={MatchCard} />
    <Route component={NotFound} />
  </Switch>
)
export default App
