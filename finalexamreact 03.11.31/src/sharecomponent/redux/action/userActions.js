import axios from 'axios';
import { createGlobalStyle } from 'styled-components';
import actionTypes from '../contants/contant';
import viewActions from './viewActions';

const Signin = (user) => async dispatch =>{
    dispatch({
        type: actionTypes.USER_SIGNIN_REQUEST,
        payload: null
    })

    try{
        const response = await axios.post('/api/auth/signin', {
            ...user
        })
        dispatch({
            type: actionTypes.USER_SIGNIN_SUCCESS,
            payload: response.data
        })
        // console.log(response.data);

        // add user infomation
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('username', response.data.username)
        localStorage.setItem('role', response.data.role)
        window.location.replace('./');
    }catch(err){
        dispatch({
            type: actionTypes.USER_SIGNIN_FAIL,
            payload: err.response.data
        })
    }
}

const Signup = user => async dispatch =>{
    dispatch({
        type: actionTypes.USER_SIGNUP_REQUEST,
        payload: null
    })

    try{
        const response = await axios.post('api/auth/signup', {
            ...user
        })
        dispatch({
            type: actionTypes.USER_SIGNUP_SUCCESS,
            payload:response.data
        })
        window.location.replace('./signin');

    }catch(err){
        dispatch({
            type: actionTypes.USER_SIGNUP_FAIL,
            payload: err.response.data
        })
    }
}

const getUserInfo = (username) => async dispatch =>{
    dispatch({
        type: actionTypes.GET_USER_INFO_REQUEST,
        payload: null
    })

    try{
        const response = await axios.get('/api/accounts/' + username, {
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        dispatch({
            type: actionTypes.GET_USER_INFO_SUCCESS,
            payload: response.data
        })
        console.log(response.data);
        // window.location.replace('./');
    }catch(err){
        dispatch({
            type: actionTypes.GET_USER_INFO_FAIL,
            payload: err.response.data
        })
    }
}

const updateUserInfo = (user, avatarUploadFile) => async(dispatch) => {
    dispatch({
        type: actionTypes.UPDATE_USER_INFO_REQUEST
    })

    try {
        if (avatarUploadFile) {
            var formData = new FormData();
            formData.append("image", avatarUploadFile, avatarUploadFile.name);
            let responseUpload = await axios({
                method: 'POST',
                url: 'http://localhost:8888/api/files/image',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                data : formData
            })
            const response = await axios({
                method: 'PUT',
                url: '/api/accounts/' + user.id,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                data: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    username: user.username,
                    email: user.email,
                    password: user.password,
                    role: localStorage.getItem('role').replace('[', '').replace(']', ''),
                    status: 'ACTIVE',
                    avatarUrl: responseUpload ? responseUpload.data : ''
                }
            })

            // localStorage.setItem('avatarUrl', responseUpload.data )

            dispatch({
                type: actionTypes.UPDATE_USER_INFO_SUCCESS,
                payload: responseUpload.data 
            })
        }else {
            const response = await axios({
                method: 'PUT',
                url: '/api/accounts/' + user.id,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                data: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    username: user.username,
                    email: user.email,
                    password: user.password,
                    role: localStorage.getItem('role').replace('[', '').replace(']', ''),
                    status: 'ACTIVE',
                    avatarUrl: localStorage.getItem('avatarUrl') ? localStorage.getItem('avatarUrl') : ''
                }
            })
            console.log(localStorage.getItem('token'))
            dispatch({
                type: actionTypes.UPDATE_USER_INFO_SUCCESS,
                payload: response.data 
            })
        }
    }catch (error) {
        dispatch({
            type: actionTypes.UPDATE_USER_INFO_FAIL,
            payload: 'Update user info fail'
        })
        if (error.response) {
            //Request made and server responsed
            console.log(error.response.data)
            console.log(error.response.status)
        }else if (error.request) {
            //The request was made but no response was received
            console.log(error.request)
        }else {
            console.log('Error', error.message)
        }
    }
}

const creatingGroup = (groupItem) => async dispatch =>{
    console.log('create group: ');
    console.log(groupItem);
    dispatch({
        type: actionTypes.CREATE_GROUP_REUQEST,
        payload: null
    })

    try {
        const response = await axios({
            url: '/api/groups',
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                name: groupItem.name,
                type: groupItem.type,
                createdAt: groupItem.createdAt,
                totalMember: groupItem.totalMember
            })
        })

        console.log(response.data)

        dispatch({
            type: actionTypes.CREATE_GROUP_SUCCESS,
            payload: response.data
        })

        //close form
        dispatch(viewActions.toggleFormGroup(false))
    }catch (error) {
        dispatch({
            type: actionTypes.CREATE_GROUP_FAIL,
            payload: {
                statusCode: error.response.status,
                message: "Create group fail!"
            }
        })
    }
}
const deleteGroup = groupId => async(dispatch) => {
    dispatch({
        type: actionTypes.DELETE_GROUP_REUQEST,
        payload: null
    })

    try {
        const response = await axios({
            url: '/api/groups',
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            params: {
                id: groupId
            }
        })

        console.log(response.data)

        dispatch({
            type: actionTypes.DELETE_GROUP_SUCCESS,
            payload: response.data
        })

    }catch (error) {
        dispatch({
            type: actionTypes.DELETE_GROUP_FAIL,
            payload: {
                statusCode: error.response.status,
                message: "Create group fail!"
            }
        })
    }
}

const updateGroup = (groupItem) => async(dispatch) => {
    console.log(groupItem)
    dispatch({
        type: actionTypes.UPDATE_GROUP_REUQEST,
        payload: null
    })

    try {
        const response = await axios({
            url: '/api/groups?id=' + groupItem.id,
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                name: groupItem.name,
                type: groupItem.type,
                createdAt: groupItem.createdAt,
                totalMember: groupItem.totalMember    
            })
        })

        console.log(response.data)

        dispatch({
            type: actionTypes.UPDATE_GROUP_SUCCESS,
            payload: response.data
        })

        //close form
        dispatch(viewActions.toggleFormGroup(false))
    }catch (error) {
        dispatch({
            type: actionTypes.UPDATE_GROUP_FAIL,
            payload: {
                statusCode: error.response.status,
                message: "Update group fail!"
            }
        })
    }
}




const getListGroups = (groupFilterForm) => async(dispath) => {
    dispath({
        type: actionTypes.GET_LIST_GROUP_REUQEST,
        payload: null
    })

    try {
        if (groupFilterForm) {
            let startDateConvert = null
            if (groupFilterForm.startDate != null) {
                startDateConvert =  groupFilterForm.startDate.getDate() + '/' + (groupFilterForm.startDate.getMonth() + 1) + '/' + groupFilterForm.startDate.getFullYear()
            }
            let endDateConvert = null
            if (groupFilterForm.endDate != null) {
                endDateConvert =  groupFilterForm.endDate.getDate() + '/' + (groupFilterForm.endDate.getMonth() + 1) + '/' + groupFilterForm.endDate.getFullYear()
            }

            /* Format input date to filter by DateTime example */
            // startDateConvert = '2022-05-15 09:12:03'
            // endDateConvert = '2022-05-20 09:27:15'

            let url = 'http://localhost:8888/api/groups/paging?' + 
            'pageNumber=' + groupFilterForm.pageNumber + '&size=' + groupFilterForm.pageSize + '&sort=' + groupFilterForm.sort + '&type=' +
            groupFilterForm.type + '&startDate=' + startDateConvert + '&endDate=' + endDateConvert

            const response = await axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
            })

            dispath({
                type: actionTypes.GET_LIST_GROUP_SUCCESS,
                payload: {
                    listGroups: response.data.content,// Array group
                    totalPagesListGroups: response.data.totalPages 
                }
            })
        }else {
            let url = 'http://localhost:8888/api/groups'

            const response = await axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })

            dispath({
                type: actionTypes.GET_LIST_GROUP_SUCCESS,
                payload: {
                    listGroups: response.data,
                    totalPagesListGroups: response.data.length // Array group
                }

            })
        }
    }catch (error) {
        dispath({
            type: actionTypes.GET_LIST_GROUP_FAIL,
            payload: {
                statusCode: error.response.status,
                message: "Get list groups fail"
            }
        })
    }
}

// change password
const changePassword = (username, newPassword) => async(dispath) => {
    dispath({
        type: actionTypes.CHANGE_PASSWORD_REQUEST
    })

    try {
        const response = await axios({
            url: '/api/accounts/password-changing',
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            params: {
                username: username,
                newPassword: newPassword
            }
        })

        console.log(response.data)

        dispath({
            type: actionTypes.CHANGE_PASSWORD_SUCCESS,
            payload: response.data
        })

    }catch (error) {
        dispath({
            type: actionTypes.CHANGE_PASSWORD_FAIL,
            payload: {
                statusCode: error.response.status,
                message: error.response.data
            }
        })
    }
}

const resetPassword = (username, newPassword) => async(dispatch) => {
    // createGlobalStyle
    dispatch({
        type: actionTypes.RESET_PASSWORD_REQUEST
    })

    try {
        const response = await axios({
            url: '/api/accounts/password-changing',
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            params: {
                username: username,
                newPassword: newPassword
            }
        })

            console.log(response.data)




        dispatch({
            type: actionTypes.RESET_PASSWORD_SUCCESS,
            payload: response.data
        })

    }catch (error) {
        dispatch({
            type: actionTypes.RESET_PASSWORD_FAIL,
            payload: {
                statusCode: error.response.status,
                message: error.response.data
            }
        })
    }
}


const userAction = {
    Signin,
    Signup,
    getUserInfo,
    updateUserInfo,
    creatingGroup,
    deleteGroup,
    updateGroup, 
    getListGroups,
    changePassword,
    resetPassword
}


export default userAction;