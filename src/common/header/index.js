import React from 'react'
import {Wrapper,Categorys,CateItem,CenterList,ListItem} from "./style";
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import {logoutUser} from "../../redux/user.redux";



@withRouter
@connect(
    state=>state.User,
    {logoutUser}
)
class Header extends React.Component{

    turnTo=(url)=>{
        this.props.history.push(url)
    };

    showList(){
        const list = document.getElementById('CenterList')
        if(list.style.display==='block') {
            list.style.display='none'
        }else {
            list.style.display='block'
        }

    }

    render() {
        return (
            <Wrapper>
                <img id={'logo'} src={require('./logo.png')} alt="logo"/>
                <img id={'chai'} src={require('./chai.png')} alt="doge"/>
                <div><span id={'big'}>均 远</span>--个人博客</div>
                <Categorys>
                    <CateItem
                        onClick={()=>this.turnTo('/')}
                    >首页</CateItem>
                    <CateItem>学习笔记</CateItem>
                    <CateItem>生活杂谈</CateItem>
                    <CateItem>个人Demo</CateItem>
                    <CateItem>给我留言</CateItem>
                    {this.props.auth?
                    <span id={'login'} onClick={()=>this.showList()}>您好！{this.props.user}</span>
                    :<span id={'login'} onClick={()=>this.turnTo('/login')}>登录</span>}
                    <CenterList id={"CenterList"}>
                        <ListItem onClick={()=>this.showList()}>个人中心</ListItem>
                        <ListItem
                            onClick={()=>{this.props.logoutUser();this.showList();this.props.history.push('/')}}
                        >退出登录</ListItem>
                    </CenterList>
                </Categorys>
            </Wrapper>
        )
    }
}
export default Header;