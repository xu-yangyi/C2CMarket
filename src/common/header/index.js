import React from 'react'
import {Wrapper,Categorys,CateItem} from "./style";
import {Redirect,withRouter} from 'react-router-dom'

@withRouter
class Header extends React.Component{

    login=()=>{
        this.props.history.push('/login')
    }

    render() {
        return (
            <Wrapper>
                <img src={require('./logo.png')} alt="logo"/>
                <div><span id={'big'}>均 远</span>--个人博客</div>
                <Categorys>
                    <CateItem>首页</CateItem>
                    <CateItem>学习笔记</CateItem>
                    <CateItem>生活杂谈</CateItem>
                    <CateItem>个人Demo</CateItem>
                    <CateItem>给我留言</CateItem>
                    <span id={'login'} onClick={()=>this.login()}>登录</span>
                </Categorys>
            </Wrapper>
        )
    }
}
export default Header;