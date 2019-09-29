import axios from 'axios';


//reducer
const initState={
    redirectTo:'',
    auth:false,
    order:'default',       //default:默认界面，myItems:我的上架，myFav:我的收藏
    user:"",
    id:'',
    msg:'',
    uploadMsg:'',
    itemsList:'',
    favors:[],
    searchContent:'',
    searchFocused:false,
};
export function SchoolUser(state=initState,action){
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...state ,msg:'',auth:true,favors:action.favors,user:action.user,id:action.id};
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
        case HANDLE_CHANGE:
            return {...state,[action.key]:action.value};
        case GET_ITEMS_LIST_SUCCESS:
            return {...state,itemsList:action.itemsList};
        case CHANGE_ORDER:
            return {...state,order:action.order};
        case CHANGE_FAVOR_SUCCESS:
            return {...state,favors:action.favors};
        case SEARCH:
            return {...state,itemsList:action.l};
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
const CHANGE_FAVOR_SUCCESS='school_user/change_favor_success';
const SEARCH='school_user/search';
const HANDLE_CHANGE='school_user/handle_change';

//ActionCreators   存储所有操作或者查询redux的action
export function errorMsg(msg) {
    return {msg, type:ERROR_MSG}}      //msg相当于msg:msg,简写则放在首位
export function uploadItemMsg(msg) {
    return {msg, type:UPLOAD_MSG}}
function authSuccess(data) {
    if(data.favors){
        return {type:AUTH_SUCCESS,user:data.user,favors:data.favors.split(','),id:data.id}
    }else{
        return {type:AUTH_SUCCESS,user:data.user,favors:[]}
    }
}
function uploadSuccess() {
    return {type:UPLOAD_SUCCESS}
}
//包括取消和添加收藏夹两种情况的综合处理
function changeFavorSuccess(f) {
    if(f){
        return {type:CHANGE_FAVOR_SUCCESS,favors:f.split(',')}
    }else {
        return {type:CHANGE_FAVOR_SUCCESS,favors:[]}
    }
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
            dispatch(authSuccess({user:res.data.user,favors:res.data.favors}))
        }else {
            dispatch(errorMsg(res.data.msg))
        }
    };

}

export function school_login({user,pwd}) {
    if(!user||!pwd){ return errorMsg("用户名或者密码不能为空")}
    return async dispatch=>{
        const res=await axios.post('/school_user/login',{user,pwd});
        if(res.status===200&&res.data.code===0){
            dispatch(authSuccess({user:res.data.user, favors:res.data.favors,id:res.data.id}))
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
export function handleChange(k,v){
    return {type:HANDLE_CHANGE,key:k,value:v}
}
export function changeOrder(value) {
    return {type:CHANGE_ORDER,order:value}
}
//添加用户收藏夹
export function addFavor(user,itemId) {
    return async dispatch=>{
        const res=await axios.post('/school_user/add_favor',{user,itemId});
        if(res.status===200&&res.data.code===0){
            dispatch(changeFavorSuccess(res.data.favors))
        }else {
            dispatch(errorMsg(res.data.msg))
        }
    };
}
//取消用户收藏夹
export function delFavor(user,itemId) {
    return async dispatch=>{
        const res=await axios.post('/school_user/del_favor',{user,itemId});
        if(res.status===200&&res.data.code===0){
            dispatch(changeFavorSuccess(res.data.favors))
        }else {
            dispatch(errorMsg(res.data.msg))
        }
    };
}
//不支持多关键字，多关键字先分割字符再循环下，我懒...
export function searchItems(items,content){
    console.log(items,content)
    let i=items.filter((v)=>{
        return v.item_name.indexOf(content)>-1 || v.owner.indexOf(content)>-1
    })
    return {type:SEARCH,l:i}
}

export function delItem(user,id) {
    return async dispatch=>{
        const res=await axios.post('/school_user/del_item',{id});
        if(res.status===200&&res.data.code===0){
            dispatch(getItemsList('all'))
        }else {
            dispatch(errorMsg(res.data.msg))
        }
    };
}