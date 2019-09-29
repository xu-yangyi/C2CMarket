import React,{Fragment} from 'react'
import {Favor, Intro, Items, ListWrapper} from "./style";
import {connect} from "react-redux";
import {addFavor, changeOrder, delFavor, getItemsList,delItem} from "../../../../redux/schoolC2c.redux/schoolUser.redux";
import {withRouter} from "react-router-dom";
import {setChating} from '../../../../redux/schoolC2c.redux/userChat.redux'

@withRouter
@connect(
    state=>state.SchoolUser,
    {changeOrder,getItemsList,addFavor,delFavor,delItem}
)
@connect(
    state=>state.UserChat,
    {setChating}
)
class SchoolItemList extends React.Component{

    render() {
        let itemsList=this.props.itemsList;
        if(this.props.order==='myFavor'){
                itemsList=this.props.itemsList.filter((v)=>{
                return this.props.favors.indexOf(v.id.toString()) > -1;
            })
        }
        return(
            <ListWrapper>
            <img id={'logo'} src={require("./schoolc2c.png")} alt="跳蚤市场 淘我所爱"/>

            {/* title部分*/}
            {this.props.order === 'default' || this.props.order === 'myFavor' ?
                <Fragment>
                    <p id={"head"}> 商品列表：</p>
                    <p className={'addition'} onClick={() => {this.props.changeOrder('default');
                    this.props.getItemsList('all')}}>返回全部</p>
                </Fragment>
                : (this.props.order === 'myItems' ?
                    <Fragment>
                        <p id={"head"}> 我的上架：</p>
                        <p className={'addition'} onClick={() => {this.props.changeOrder('default');
                            this.props.getItemsList('all')}}>返回全部</p>
                        <p className={'addition'} onClick={() => this.props.history.push('/schoolC2C/Upload')}>我要上架</p>
                        <p className={'addition'} onClick={() => this.props.changeOrder('delItems')}>下架物品</p>
                    </Fragment>
                        :null)}

            {/* item显示部分*/}

            {itemsList.length ?

                itemsList.map(v => {
                    const itemPic = v['item_pic']
                    return (
                        <Items key={v.id}>
                            <img src={itemPic} alt="商品图片"
                                 onClick={this.props.auth?
                                     ()=>{this.props.setChating(v['owner']);this.props.history.push('/schoolC2C/userChat')}
                                     :null}/><br/>
                            <p id={'title'}>{v['item_name']}</p>
                            <p id={'price'}>￥{v['item_price']}</p>
                            <p className={'info'}>商 家：{v['owner']}</p>
                            <p className={'info'}>联系方式：{v['owner_contact']}</p>
                            <p className={'info'}>商品介绍：</p>
                            <Intro>{v['item_intro']}</Intro>
                            {this.props.auth
                                ? (this.props.favors.indexOf(v.id.toString()) > -1)
                                    ? <Favor onClick={()=>this.props.delFavor(this.props.user,v.id)}><img src={require('./xin_active.png')}
                                                                                                          alt="已收藏"/></Favor>
                                    : <Favor onClick={()=>this.props.addFavor(this.props.user,v.id)}><img src={require('./xin_inactive.png')}
                                                                                                          alt="未收藏"/></Favor>
                                :null}
                            {this.props.order==='delItems' && this.props.auth===true?
                                <div id={'del'}
                                     onClick={()=>{this.props.delItem(this.props.user,v.id);this.props.changeOrder('myItems');}}>X</div>:null}
                        </Items>)
                })
                : <p id={'nothing'}>还未上架任何物品哦！</p>}
        </ListWrapper>)
    }
}

export default SchoolItemList