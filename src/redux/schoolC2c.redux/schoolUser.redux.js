import axios from 'axios';


//reducer
const initState={
    redirectTo:'',
    auth:false,
    order:'default',     //default:默认界面，myItems:我的上架，myFav:我的收藏
    user:"",
    pwd:"",
    msg:'',
    uploadMsg:'',
    itemsList:'',
};
export function SchoolUser(state=initState,action){
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...state ,msg:'',auth:true,...action.data};
        case ERROR_MSG:
            return {...state,msg:action.msg};
        case LOAD_DATA:
            return {...state ,...action.data};
        case LOGOUT:
            return {...initState};
        case UPLOAD_SUCCESS:
            return {...state,redirectTo:'/schoolC2C'};
        case UPLOAD_MSG:
            return {...state,uploadMsg:action.msg};
        case GET_ITEMS_LIST_SUCCESS:
            return {...state,itemsList:action.itemsList};
        case CHANGE_ORDER:
            return {...state,order:action.order};
        default:
            return state
    }
}




//Constants
const AUTH_SUCCESS='school_user/auth_success';
const ERROR_MSG="school_user/error_mag";
const LOAD_DATA='school_user/load_data';
const LOGOUT='school_user/logout';
const UPLOAD_SUCCESS='school_user/upload_success';
const UPLOAD_MSG='school_user/upload_msg';
const GET_ITEMS_LIST_SUCCESS='school_user/get_items_list_success';
const CHANGE_ORDER='school_user/change_order';


//ActionCreators   存储所有操作或者查询redux的action
export function errorMsg(msg) {
    return {msg, type:ERROR_MSG}}      //msg相当于msg:msg,简写则放在首位
export function uploadItemMsg(msg) {
    return {msg, type:UPLOAD_MSG}}
function authSuccess(data) {
    return {type:AUTH_SUCCESS,data:data}
}
function uploadSuccess() {
    return {type:UPLOAD_SUCCESS}
}
//成功获取用户上传商品的列表
function getItemsListSuccess(itemsList) {
    return {type:GET_ITEMS_LIST_SUCCESS,itemsList:itemsList}
}

export function school_register({user,pwd}){
    if (!user||!pwd){
        return errorMsg("用户名密码输入不能为空")
    }
    if(!(2<=user.length<=10) || !(6<=pwd.length<=13)){
        return errorMsg('注册信息长度不符合规范')
    }
    return async dispatch=>{
        const res=await axios.post('/school_user/register',{user,pwd});

        if(res.status===200&&res.data.code===0){
            dispatch(authSuccess({user:user}))
        }else {
            dispatch(errorMsg(res.data.msg))
        }
    };

}

export function school_login({user,pwd}) {
    if(!user||!pwd){ return errorMsg("用户名或者密码不能为空")}
    return async dispatch=>{
        const res=await axios.post('/school_user/login',{user,pwd})
        if(res.status===200&&res.data.code===0){
            dispatch(authSuccess(res.data))
        }else {
            dispatch(errorMsg(res.data.msg))
        }
    }
}

export function register_item({itemName,itemPrice,itemOwner, itemIntro, contact,imgURL}){
    if(!itemName||!itemPrice||!itemIntro||!contact||!imgURL){ return uploadItemMsg("输入不能为空")}
    if(!(2<=itemName.length<=10) || !(1<=itemPrice.length<=10) || !(2<=itemIntro.length<=100)){
        return uploadItemMsg('提交的信息长度不符合规范')}
    return async dispatch=>{
        const res=await axios.post('/schoolC2C/upload',{itemName,itemPrice,itemOwner, itemIntro, contact,imgURL});

        if(res.status===200&&res.data.code===0){
            dispatch(uploadSuccess())
        }else {
            dispatch(uploadItemMsg(res.data.msg))
        }
    };
}

export function getItemsList(user) {
    return async dispatch=>{
        const res=await axios.post('/school_user/get_personal_items_list',{user});
        if(res.status===200&&res.data.code===0){
            dispatch(getItemsListSuccess(res.data.itemsList))
        }else {
            dispatch(errorMsg(res.data.msg))
        }
    };
}

export function logoutUser() {
    return {type:LOGOUT}
}

export function changeOrder(value) {
    return {type:CHANGE_ORDER,order:value}
}