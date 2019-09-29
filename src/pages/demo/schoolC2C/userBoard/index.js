import {connect} from "react-redux";
import {
    changeOrder,
    getItemsList,
    logoutUser,
    school_login,
    school_register, searchItems,handleChange
} from "../../../../redux/schoolC2c.redux/schoolUser.redux";
import React, {Fragment} from "react";
import {Input} from "../../../login/style";
import {AuthButton,Button, Error, SearchButton, SearchFrame,Board} from "./style";
import {withRouter} from "react-router-dom";



@withRouter
@connect(
    state=>state.SchoolUser,
    {school_login,school_register,logoutUser,getItemsList,changeOrder,searchItems,handleChange}
)
class UserBoard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pwd: '',
        }
    }
    render() {
        return (
            <Board>
                    {this.props.auth===true?
                    <Fragment>
                    <p>您好！{this.props.user}</p>
                    <AuthButton className={'auth'}
                                onClick={()=>{this.props.changeOrder('myItems');this.props.history.push('/schoolC2C');
                                    this.props.getItemsList(this.props.user)}}>我的上架</AuthButton>
                    <AuthButton className={'auth'}
                                onClick={()=>this.props.history.push('/schoolC2C/userChat')}>我的消息</AuthButton>
                    <AuthButton className={'auth'}
                                onClick={()=>{this.props.history.push('/schoolC2C');this.props.changeOrder('myFavor')}}>我的收藏</AuthButton>
                    <AuthButton className={'auth'} onClick={()=>{this.props.logoutUser();this.props.getItemsList('all')}}>退出登录</AuthButton>

                    <SearchFrame onFocus={()=>this.props.handleChange('searchFocused',true)}
                                 onBlur={()=>this.props.handleChange('searchFocused',false)}
                                 onChange={(t)=>this.props.handleChange('searchContent',t.target.value)}
                                 id={this.props.searchFocused?'inSearch':'outSearch'}
                                 placeholder={'输入商品名搜索'}/>
                    <img id={this.props.searchFocused?'picHid':'picShow'}
                         src={require('./search.png')} alt=""/>
                    <SearchButton id={this.props.searchFocused?'butShow':'butHid'}
                                  onClick={()=>this.props.searchItems(this.props.itemsList,this.props.searchContent)}>
                        搜索</SearchButton>
                    </Fragment>
                :<Fragment>
                    <p>欢迎进入校园跳蚤市场!<br/>在这里你可以出售自己不需要的物品，也可以浏览并购买其他人的物品<br/>（此账号与博客账号无关）</p>
                    <br/>
                    用户名：<Input placeholder='2-10个字符长度'
                               onChange={v=>this.setState({'user':v.target.value})}/>
                    密　码：<Input placeholder='6-13个字符长度'
                               type='password'
                               onChange={v=>this.setState({'pwd':v.target.value})}/>
                    {this.props.msg?
                        <Error>{this.props.msg}</Error>
                        : null}
                    <Button onClick={()=>this.props.school_login(this.state)}>登录</Button>
                    <Button onClick={()=>this.props.school_register(this.state)}>注册用户</Button>
                </Fragment>}
        </Board>)
    }
}
export default UserBoard;