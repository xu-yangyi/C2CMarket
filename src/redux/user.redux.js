import axios from 'axios';
import { getRedirectPath } from "./util";

//reducer
const initState={
    redirectTo:'',
    auth:false,
    user:"",
    pwd:"",
    contact:"",
    msg:'',
};
export function User(state=initState,action){
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...state ,msg:'' ,redirectTo:'/',auth:true,...action.data};
        case ERROR_MSG:
            return {...state,msg:action.msg};
        case LOAD_DATA:
            return {...state ,...action.data};
        case LOGOUT:
            return {...initState};
        default: return state
    }
}




//Constants
const AUTH_SUCCESS='user/auth_success';
const ERROR_MSG="user/error_mag";
const LOAD_DATA='user/load_data';
const LOGOUT='user/logout';


//ActionCreators   存储所有操作或者查询redux的action
export function errorMsg(msg) {
    return {msg, type:ERROR_MSG}}      //msg相当于msg:msg,简写则放在首位
function authSuccess(data) {
    return {type:AUTH_SUCCESS,data:data}
}

export function register({user,pwd,repeat,contact}){
    if (!user||!pwd||!repeat){
        return errorMsg("用户名密码输入不能为空")
    }
    if(!(2<=user.length<=10) || !(6<=pwd.length<=13) || !(6<=repeat.length<=13)){
        return errorMsg('注册信息长度不符合规范')
    }
    if(pwd!==repeat){
        return errorMsg("两次输入密码不一致")
    }
    return async dispatch=>{
        const res=await axios.post('/user/register',{user,pwd,contact});

        if(res.status===200&&res.data.code===0){
            dispatch(authSuccess({user:user,contact:contact}))
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
            dispatch(authSuccess(res.data))
        }else {
            dispatch(errorMsg(res.data.msg))
        }
    }
}

export function logoutUser() {
    return {type:LOGOUT}
}