import actionTypes from '../contants/contant';
const initState = {
    isLoading: false,
    signinErr: null,
    signupErr: null,
    errMessUI: null,
    userInfo: {},
    errorUserInfoMessage: null,
    errorMessage: null,
    createdGroupSuccessfully: false,
    updateCompleted: false,
    closeFormGroup: false,
    listGroups: [],
    totalPagesListGroups: 0,
    errorMessageChangePassword: null,
    messageChangePasswordSuccess: null,
    messageUpdateSuccess: null
}


const userReducer = (state = initState, action) =>{
    switch(action.type){
        //signup
        case actionTypes.USER_SIGNUP_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case actionTypes.USER_SIGNUP_SUCCESS:
            return{
                ...state,
                isLoading: false
            }
        case actionTypes.USER_SIGNUP_FAIL:
            return{
                ...state,
                isLoading: false,
                signupErr: action.payload
            }
    

// signin
        case actionTypes.USER_SIGNIN_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case actionTypes.USER_SIGNIN_SUCCESS:
            return{
                ...state,
                isLoading: false
            }
        case actionTypes.USER_SIGNIN_FAIL:
            return{
                ...state,
                isLoading: false,
                signinErr: action.payload
                
            }

            // get userinfo
            case actionTypes.GET_USER_INFO_REQUEST:
            return{
                ...state,
                isLoading: true
            }
            case actionTypes.GET_USER_INFO_SUCCESS:
                return{
                    ...state,
                    isLoading: false,
                    userInfo: action.payload
                }
            case actionTypes.GET_USER_INFO_FAIL:
                return{
                    ...state,
                    isLoading: false,
                    errMessUI: action.payload
                    
                }
            //Update user info
            case actionTypes.UPDATE_USER_INFO_REQUEST:
                return {...state, isLoading: true}
            case actionTypes.UPDATE_USER_INFO_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    messageUpdateSuccess: 'Update thành công!'
                }
            case actionTypes.UPDATE_USER_INFO_FAIL:
                return {...state, isLoading: false, errorUserInfoMessage: action.payload}
        

            // creating group

            case actionTypes.CREATE_GROUP_REQUEST:
                return {...state, isLoading: true}
            case actionTypes.CREATE_GROUP_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    createdGroupSuccessfully: !state.createdGroupSuccessfully,
                    closeFormGroup: true
                }
            case actionTypes.CREATE_GROUP_FAIL:
                return {...state, isLoading: false, errorMessageGroup: action.payload}


// update group
            case actionTypes.UPDATE_GROUP_REQUEST:
                return {...state, isLoading: true}
            case actionTypes.UPDATE_GROUP_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    updateCompleted: !state.updateCompleted,
                }
            case actionTypes.UPDATE_GROUP_FAIL:
                return {...state, isLoading: false, errorMessageGroup: action.payload}

                // get list group
            case actionTypes.GET_LIST_GROUP_REUQEST:
                return{
                 ...state,
                 isLoading: true   
                }
            case actionTypes.GET_LIST_GROUP_SUCCESS:
                return{
                    ...state,
                    isLoading: false,
                    listGroups: action.payload.listGroups,
                    totalPagesListGroups: action.payload.totalPagesListGroups
                }
            case actionTypes.GET_LIST_GROUP_FAIL:
                return{
                    ...state,
                    isLoading: false,
                    errorMessage: action.payload
                }
                // delete groups
                case actionTypes.DELETE_GROUP_REUQEST:
                    return {
                        ...state, isLoading: true,
                        groupDeleted: false
                    }
                case actionTypes.DELETE_GROUP_SUCCESS:
                    return {
                        ...state,
                        isLoading: false,
                        groupDeleted: !state.groupDeleted,
                    }
                case actionTypes.DELETE_GROUP_FAIL:
                    return {...state, isLoading: false, errorMessageGroup: action.payload}


                // change password
                case actionTypes.CHANGE_PASSWORD_REQUEST:
                    return {
                        ...state, 
                        isLoading: true,
                        messageChangePasswordSuccess:  null,
                        errorMessageChangePassword: null
                    }
                case actionTypes.CHANGE_PASSWORD_SUCCESS:
                    return {
                        ...state,
                        isLoading: false,
                        messageChangePasswordSuccess: 'Your password changed. Please re-active account by click the link which our system has just send to your email.'
                    }
                case actionTypes.CHANGE_PASSWORD_FAIL:
                    return {...state, isLoading: false, errorMessageChangePassword: action.payload}



                    // reset password
                case actionTypes.RESET_PASSWORD_REQUEST:
                    return {
                        ...state, 
                        isLoading: true,
                        messageChangePasswordSuccess:  null,
                        errorMessageChangePassword: null
                    }
                case actionTypes.RESET_PASSWORD_SUCCESS:
                    return {
                        ...state,
                        isLoading: false,
                        messageChangePasswordSuccess: 'Your password reset. Please re-active account by click the link which our system has just send to your email.'
                    }
                case actionTypes.RESET_PASSWORD_FAIL:
                    return {...state, isLoading: false, errorMessageChangePassword: action.payload}

        default: return state
    }
    
}


export default userReducer;