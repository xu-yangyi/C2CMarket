import axios from 'axios';
import { getRedirectPath } from "./util";

//reducer
const initState={
    redirectTo:'',
    msg:"",
    user:"",
    salary:"",
    pwd:"",
    type:"",
};
export function User(state=initState,action){
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...state ,msg:'' ,redirectTo:getRedirectPath(action.data) , ...action.data};
        case ERROR_MSG:
            return {...state,msg:action.msg};
        case LOAD_DATA:
            return {...state ,...action.data};
        case LOGOUT:
            return {...initState,redirectTo:'/login'};
        default: return state
    }
}




//Constants
const AUTH_SUCCESS='user/auth_success';
const ERROR_MSG="user/error_mag";
const LOAD_DATA='user/load_data';
const LOGOUT='user/logout';


//ActionCreators   存储所有操作或者查询redux的action
function errorMsg(msg) {
    return {msg, type:ERROR_MSG}}      //msg相当于msg:msg,简写则放在首位
function authSuccess(data) {
    return {type:AUTH_SUCCESS,data:data}
}
export function register({user,pwd,repeatpwd,type}){
    if (!user||!pwd||!repeatpwd){
        return errorMsg("用户名密码输入不能为空")
    }
    if(pwd!==repeatpwd){
        return errorMsg("两次输入密码不一致")
    }
    return async dispatch=>{
        const res=await axios.post('/user/register',{user ,pwd ,type})

        if(res.status===200&&res.data.code===0){
            dispatch(authSuccess({user,pwd,type}))
        }else {
            dispatch(errorMsg(res.data.msg))
        }
    };

}

export function login({user,pwd}) {
    if(!user||!pwd){ return errorMsg("用户名或者密码不能为空")}
    return async dispatch=>{
        const res=await axios.post('/user/login',{user,pwd})
        if(res.status===200&&res.data.code===0){
            dispatch(authSuccess(res.data.data))
        }else {
            dispatch(errorMsg(res.data.msg))
        }
    }
}

export function loadData(stateData){
    return {type:LOAD_DATA, data:stateData}
}

export function updateInfo(data) {
    return async dispatch=>{
        const res=await axios.post('/user/update',data)
        if(res.status===200&&res.data.code===0){
            dispatch(authSuccess(res.data.data))
        }else {
            dispatch(errorMsg(res.data.msg))
        }
    }
}

export function logoutUser() {
    return {type:LOGOUT}
}