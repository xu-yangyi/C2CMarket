import React from 'react'
import {BigPage, Wrapper,ChatPage,MsgList,UserList,SendArea,ShowArea,Send,Input,User,UserHead} from "./style";
import {connect} from "react-redux";
import UserBoard from '../userBoard'
import {sendMsg,setChating} from '../../../../redux/schoolC2c.redux/userChat.redux'

@connect(
    state=>state.UserChat,
    {sendMsg,setChating}
)
@connect(
    state=>state.SchoolUser,
)
class SchoolUserChat extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            from:'',
            content:'',
            chatingUser:'',
        }
    }
    componentDidMount() {
        this.setState({from:this.props.user})
    }

    render() {
        const userList=this.props.userList;
        return(
            <Wrapper>
                <BigPage>
                    {/*最后加上没有auth的跳转*/}
                    <ChatPage>
                        <UserList>
                            <UserHead>用户列表</UserHead>
                            {userList.map(v=>{
                                return(
                                    <User onClick={()=>this.props.setChating(v)}>
                                        <img src={require('./cat1.png')} alt="用户头像"/>
                                        <div id={'name'}>{v}</div>
                                        <br/>
                                        <div id={'latest'}>Last Msg</div>
                                    </User>
                                )})}
                        </UserList>
                        <MsgList>
                            <ShowArea>
                                <div id={'head'}>{this.props.chatingUser}</div>
                            </ShowArea>
                            <SendArea>
                                <Input onChange={v=>this.setState({content:v.target.value})}/>
                                <Send onClick={()=>this.props.sendMsg(this.state.from,this.props.chatingUser,this.state.content)}>SEND</Send>
                            </SendArea>
                        </MsgList>
                    </ChatPage>
                    <UserBoard/>
                </BigPage>
            </Wrapper>
        )
    }
}


export default SchoolUserChat;