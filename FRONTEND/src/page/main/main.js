import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";
import UserInfo from "../userinfo/UserInfo";
import ListGroups from '../listgroups/ListGroups';
import ForgotPassword from "../forgotpassword/ForgotPassword";
import Settings from "../settings/Settings";
import WithLoading from "../../sharecomponent/HOC/withloading/WithLoading";
import PasswordChanging from '../passwordchange/PasswordChanging'
import resetpassword from "../resetpassword/resetpassword";
const userInfoWithLoading = WithLoading(UserInfo);
const listGroupWithLoading = WithLoading(ListGroups);
const passwordChangingWithLoading = WithLoading(PasswordChanging);
const MainComponent = styled.div`
`



const Main = props =>{
    return(
        <div className='main'>
            <Switch>
                <Route path='/user-info' component={userInfoWithLoading}/>
                <Route path='/list-group' component={listGroupWithLoading}/>
                <Route path='/password-change' component={passwordChangingWithLoading}/>
                <Route path='/settings' component={Settings}/>

                <Redirect from='/' to='/user-info' />
            </Switch>
        </div>
    )
}


export default Main;