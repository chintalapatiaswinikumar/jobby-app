import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')
  console.log('in protected')
  if (token === undefined) {
    console.log('in login')
    return <Redirect to="/login" />
  }
  console.log('props', {...props})
  return <Route {...props} />
}

export default ProtectedRoute
