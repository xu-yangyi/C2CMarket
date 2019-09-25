import React,{Fragment} from 'react'
import {Intro, Items, ListWrapper} from "./style";
import {connect} from "react-redux";
import {changeOrder, getItemsList} from "../../../../redux/schoolC2c.redux/schoolUser.redux";
import {withRouter} from "react-router-dom";


@withRouter
@connect(
    state=>state.SchoolUser,
    {changeOrder,getItemsList}
)
class SchoolItemList extends React.Component{
    render() {
        return(<ListWrapper>
            <img id={'logo'} src={require("./schoolc2c.png")} alt="跳蚤市场 淘我所爱"/>
            {this.props.order === 'default' ?
                <p id={"head"}> 商品列表：</p>
                : (this.props.order === 'myItems' ?
                    <Fragment>
                        <p id={"head"}> 我的上架：</p>
                        <p id={'all'} onClick={() => {this.props.changeOrder('default');
                                                      this.props.getItemsList('all')}}>返回全部</p>
                        <p id={'all'} onClick={() => this.props.history.push('/schoolC2C/upload')}>我要上架</p>
                    </Fragment>
                        :null)}
            {this.props.itemsList.length ?
                this.props.itemsList.map(v => {
                    const itemPic = v['item_pic']
                    return (
                        <Items>
                            <img src={itemPic} alt="商品图片"/><br/>
                            <p id={'title'}>{v['item_name']}</p>
                            <p id={'price'}>￥{v['item_price']}</p>
                            <p className={'info'}>商 家：{v['owner']}</p>
                            <p className={'info'}>联系方式：{v['owner_contact']}</p>
                            <p className={'info'}>商品介绍：</p>
                            <Intro>{v['item_intro']}</Intro>
                        </Items>)
                })
                : <p id={'nothing'}>还未上架任何物品哦！</p>}
        </ListWrapper>)
    }
}

export default SchoolItemList