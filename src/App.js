import './App.css'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import Jobs from './components/Jobs'
import CardDetails from './components/CardDetails'
/* import Header from './components/Header'
 */
// These are the lists used in the application. You can move them to any component needed.
/* const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
] */

// Replace your code here
const App = () => (
  <BrowserRouter>
    {/*     <Header />
     */}{' '}
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/jobs" component={Jobs} />
      <ProtectedRoute path="/jobs/:id" component={CardDetails} />
      <ProtectedRoute path="/bad-path" component={NotFound} />
      {/*       <Redirect to="bad-path" />
       */}{' '}
    </Switch>
  </BrowserRouter>
)
export default App