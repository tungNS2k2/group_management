const TOGLGLE_SIDEBAR = 'TOGLGLE_SIDEBAR';


// singin
const USER_SIGNIN_REQUEST = 'USER_SIGNIN_REQUEST';
const USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS';
const USER_SIGNIN_FAIL = 'USER_SIGNIN_FAIL';


//signup
const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST';
const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
const USER_SIGNUP_FAIL = 'USER_SIGNUP_FAIL';

const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
const GET_USER_INFO_FAIL = 'GET_USER_INFO_FAIL';


const UPDATE_USER_INFO_REQUEST = 'UPDATE_USER_INFO_REQUEST';
const UPDATE_USER_INFO_SUCCESS = 'UPDATE_USER_INFO_SUCCESS';
const UPDATE_USER_INFO_FAIL = 'UPDATE_USER_INFO_FAIL';


const TOGGLE_FORM_GROUP = "TOGGLE_FORM_GROUP";


const CREATE_GROUP_REUQEST = "CREATE_GROUP_REUQEST";
const CREATE_GROUP_SUCCESS = "CREATE_GROUP_SUCCESS";
const CREATE_GROUP_FAIL = "CREATE_GROUP_FAIL";


const GET_LIST_GROUP_REUQEST ='GET_LIST_GROUP_REUQEST';
const GET_LIST_GROUP_SUCCESS ='GET_LIST_GROUP_SUCCESS';
const GET_LIST_GROUP_FAIL ='GET_LIST_GROUP_FAIL';


const UPDATE_GROUP_REUQEST = 'UPDATE_GROUP_REUQEST';
const UPDATE_GROUP_SUCCESS = 'UPDATE_GROUP_SUCCESS';
const UPDATE_GROUP_FAIL = 'UPDATE_GROUP_FAIL';


const DELETE_GROUP_REUQEST = 'DELETE_GROUP_REUQEST';
const DELETE_GROUP_SUCCESS = 'DELETE_GROUP_SUCCESS';
const DELETE_GROUP_FAIL = 'DELETE_GROUP_FAIL';


const CHANGE_PASSWORD_REQUEST = 'CHANGE_PASSWORD_REQUEST';
const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
const CHANGE_PASSWORD_FAIL = 'CHANGE_PASSWORD_FAIL';


const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
const RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL';


const actionTypes = {
    TOGLGLE_SIDEBAR,

    //signin
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
// signup
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,

// get user info
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAIL,
// update userInfo
    UPDATE_USER_INFO_REQUEST,
    UPDATE_USER_INFO_SUCCESS,
    UPDATE_USER_INFO_FAIL,


    TOGGLE_FORM_GROUP,


    // create group
    CREATE_GROUP_REUQEST,
    CREATE_GROUP_SUCCESS,
    CREATE_GROUP_FAIL,

// get list group
    GET_LIST_GROUP_REUQEST,
    GET_LIST_GROUP_SUCCESS,
    GET_LIST_GROUP_FAIL,

// update group
    UPDATE_GROUP_REUQEST,
    UPDATE_GROUP_SUCCESS,
    UPDATE_GROUP_FAIL,

    // delete group
    DELETE_GROUP_REUQEST,
    DELETE_GROUP_SUCCESS,
    DELETE_GROUP_FAIL,


    // change password
    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAIL,

    // reset password
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL
    
}
export default actionTypes;