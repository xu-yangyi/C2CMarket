import React from 'react'
import {Wrapper,Categorys,CateItem,ItemList,ListItem} from "./style";
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import {logoutUser} from "../../redux/user.redux";



@withRouter
@connect(
    state=>state.User,
    {logoutUser}
)
class Header extends React.Component{

    showList(str){
        const list = document.getElementById(str);
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
                <div><span id={'big'}>　</span>--个人博客</div>
                <Categorys>
                    <CateItem onClick={()=>this.props.history.push('/')}>首页</CateItem>
                    <CateItem>学习笔记</CateItem>
                    <CateItem>生活杂谈</CateItem>
                    <CateItem onClick={()=>{this.showList('demo')}}>个人Demo</CateItem>
                    <CateItem>给我留言</CateItem>

                    {this.props.auth?
                    <span id={'login'} onClick={()=>this.showList("CenterList")}>您好！{this.props.user}</span>
                    :<span id={'login'} onClick={()=>this.props.history.push('/login')}>登录</span>}

                    {/*附加部分，每个菜单的下属*/}
                    <ItemList id={"CenterList"} onClick={()=>this.showList("CenterList")}>
                        <ListItem >个人中心</ListItem>
                        <ListItem onClick={()=>{this.props.logoutUser();this.props.history.push('/')}}>退出登录</ListItem>
                    </ItemList>

                    <ItemList id={"demo"}>
                        <ListItem onClick={()=>{this.showList('demo');this.props.history.push('/schoolC2C')}}>跳蚤市场</ListItem>
                    </ItemList>

                </Categorys>
            </Wrapper>
        )
    }
}
export default Header;