import axios from 'axios';


//reducer
const initState={
    from:'',
    chatingUser:'',
    userList:['苏东坡'],
    msgList:[],
    msgGroup:[],
    error:null,
};
export function UserChat(state=initState,action){
    switch (action.type) {
        case ERROR:
            return {...state,error:action.msg};
        case SEND_MSG_SUCCESS:
            return {...state,msgList:action.msgList};
        case SET_CHATING:
            return {...state,chatingUser:action.chatingUser,userList:action.userList};
        default:
            return state
    }
}




//Constants
const ERROR='userChat/error';
const SEND_MSG_SUCCESS='userChat/sendMsgSuccess';
const SET_CHATING='userChat/setChating';

//ActionCreators   存储所有操作或者查询redux的action
function errorMsg(msg){
    return {type:ERROR,msg:msg}
}
function SendMsgSuccess(msgList) {
    return {type:SEND_MSG_SUCCESS,msgList:msgList}
}

function getNowFormatDate() {//获取当前时间
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1;
    var strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
    var currentdate = date.getFullYear() + seperator1  + month  + seperator1  + strDate
        + " "  + date.getHours()  + seperator2  + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}
export function sendMsg(from_user,to_user,content) {
    function getId(a,b) {
        if(a<b){
            return a+'_'+b
        }else return b+'_'+a
    }
    const chatId=getId(from_user,to_user);
    const date=getNowFormatDate()
    return async dispatch=>{
        const res=await axios.post('/school_user/send_msg',{chatId,from_user,to_user,content,date});
        if(res.status===200&&res.data.code===0){
            dispatch(SendMsgSuccess(res.data.msgList))
        }else {
            dispatch(errorMsg(res.data.msg))
        }
}
}
export function setChating(user) {
    //加入到UserList里面
    let l=this.userList
    if(l.indexOf(user)===-1){
        l.push(user)
    }
    return {type:SET_CHATING,chatingUser:user,userList:l}
}