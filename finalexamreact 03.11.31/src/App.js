import WithLoading from './sharecomponent/HOC/withloading/WithLoading';
import './App.css';
import { Redirect,BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ForgotPassword from './page/forgotpassword/ForgotPassword';
import Home from './page/Home';
import Signin from './page/signin/Signin';
import Signup from './page/signup/Signup';
import UserInfo from './page/userinfo/UserInfo';
import ListGroups from './page/listgroups/ListGroups';
import Settings from './page/settings/Settings';


const signupWithLoading = WithLoading(Signup);
const signinWithLoading = WithLoading(Signin);
// const userInfoWithLoading = WithLoading(UserInfo);





function App() {
    const username = localStorage.getItem('username')
    if(!username){
        return(
            <Router>
              <div className='app'>
                    <Switch>
                        <Route path='/signin' component={signinWithLoading}/>
                        <Route path='/signup' component={signupWithLoading}/>
                        <Route path='/forgotpassword' component={ForgotPassword}/>
                        {/* <Route path='/' component={Home}/> */}
                        <Redirect from='/' to='/signin' />
                    </Switch>
                </div>
            </Router>
            )

    }else{
        return(
            <Router>
              <div className='app'>
                    <Switch>
                        <Route path='/signin' component={signinWithLoading}/>
                        <Route path='/signup' component={signupWithLoading}/>
                        <Route path='/forgotpassword' component={ForgotPassword}/>
                        <Route path='/' component={Home}> 
                        </Route>
                        {/* <Redirect from='/' to='/signin' /> */}
                    </Switch>
                    
                        
                    
                </div>
            </Router>


        )
    }
}

export default App;
