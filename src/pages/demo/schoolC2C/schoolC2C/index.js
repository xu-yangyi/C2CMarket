import React from 'react'
import {Wrapper,BigPage,UserBoard,Button,
        Error,AuthButton,SearchFrame} from "./style";
import {connect} from "react-redux";
import {
    logoutUser,
    school_login,
    school_register,
    getItemsList,
    changeOrder
} from "../../../../redux/schoolC2c.redux/schoolUser.redux";
import {Input} from "../../../login/style";
import SchoolItemList from "../schoolItemList";


@connect(
    state=>state.SchoolUser,
    {school_login,school_register,logoutUser,getItemsList,changeOrder}
)
class SchoolC2C extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pwd: '',
            order:'default',
        };
    }
    componentDidMount() {
        this.props.getItemsList('all')
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }

    render() {
        return (
            <Wrapper>
                <BigPage>
                    <SchoolItemList handleChange={(k,v)=>this.handleChange(k,v)}/>
                    {/*用户控制列表，根据是否登陆：auth，显示不同的操作面板*/}
                    {!this.props.auth?
                        <UserBoard>
                            <p>欢迎进入校园跳蚤市场!<br/>在这里你可以出售自己不需要的物品，也可以浏览并购买其他人的物品<br/>（此账号与博客账号无关）</p>
                            <br/>
                            用户名：<Input placeholder='2-10个字符长度' onChange={v=>this.handleChange('user',v.target.value)}/>
                            密　码：<Input placeholder='6-13个字符长度'
                                   type='password'
                                   onChange={(v)=>this.handleChange('pwd',v.target.value)}/>
                            {this.props.msg?
                                <Error>{this.props.msg}</Error>
                                : null}
                            <Button onClick={()=>this.props.school_login(this.state)}>登录</Button>
                            <Button onClick={()=>this.props.school_register(this.state)}>注册用户</Button>
                        </UserBoard>
                        :<UserBoard>
                            <p>您好！{this.props.user}</p>
                            <AuthButton className={'auth'}
                                        onClick={()=>{this.props.changeOrder('myItems');
                                                      this.props.getItemsList(this.props.user)}}>我的上架</AuthButton>
                            <AuthButton className={'auth'}>我的消息</AuthButton>
                            <AuthButton className={'auth'}>我的收藏</AuthButton>
                            <AuthButton className={'auth'} onClick={()=>this.props.logoutUser()}>退出登录</AuthButton>
                            <SearchFrame>这是搜索栏</SearchFrame>
                        </UserBoard>}

                </BigPage>
            </Wrapper>
        )
    }
}
export default SchoolC2C;





