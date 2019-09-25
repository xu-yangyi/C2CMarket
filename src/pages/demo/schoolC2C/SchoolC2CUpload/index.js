import React from 'react'
import {Wrapper, BigPage, UploadWrapper, InfoWrapper,Button,UploadError} from "./style";
import {connect} from "react-redux";
import {errorMsg, logoutUser, school_login, school_register,register_item} from "../../../../redux/schoolC2c.redux/schoolUser.redux";
import {AuthButton, SearchFrame, UserBoard} from "../schoolC2C/style";
import CropperModel from '../../../../common/cropperModel'




@connect(
    state=>state.SchoolUser,
    {school_login,school_register,logoutUser,register_item}
)
class SchoolC2CUpload extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            itemName:'',
            itemPrice:'',
            itemOwner:this.props.user,
            itemIntro:'',
            contact:'',
            selectedImageFile:'',
            cropperVisible:false,
            imgURL:null,
        };
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size <= 1024*1024*2) {
                this.setState({
                    selectedImageFile: file,
                },() => {
                    this.setState({
                        cropperVisible: true,
                    })})}
            else { errorMsg("文件过大") }}
        e.target.value = ''
    };
    render(){
        return (
            <Wrapper>
                {this.props.redirectTo?
                    this.props.history.push(this.props.redirectTo)
                    :null}
                <BigPage>
                    {/*裁剪弹窗*/}
                    {this.state.cropperVisible?
                    <CropperModel
                        uploadedImageFile={this.state.selectedImageFile}
                        submitImg={(val)=>this.handleChange('imgURL',val)}
                        closeComponent={()=>this.handleChange('cropperVisible',false)}/>
                    :null}

                    {/*上传信息界面*/}
                    <UploadWrapper>
                            <input id="file"
                                   accept="image/jpeg,image/jpg,image/png"
                                   onChange={(e)=>this.handleFileChange(e)}
                                   type="file"/>
                            {this.state.imgURL?
                                <img id='itemImg' src={this.state.imgURL} alt="已上传的图片"/>
                                :<span id='itemImg'>还未上传图片</span>}

                           <InfoWrapper>
                               　商品名：<input type="text"  placeholder={'2-10个字符'}
                                           onChange={(v)=>this.handleChange('itemName',v.target.value)}/><br/>
                               　价　格：<input type="text"  placeholder={'1-10个字符'}
                                           onChange={(v)=>this.handleChange('itemPrice',v.target.value)}/><br/>
                               联系方式：<input type="text"  placeholder={'必填，方便买家联系'}
                                           onChange={(v)=>this.handleChange('contact',v.target.value)}/><br/>
                               简要介绍：<textarea cols="21" rows="5" placeholder={'简要介绍，2-100个字符'}
                                           onChange={(v)=>this.handleChange('itemIntro',v.target.value)}/><br/>
                           </InfoWrapper>
                            {this.props.uploadMsg?
                                <UploadError>{this.props.uploadMsg}</UploadError>
                            :null}
                            <Button onClick={()=>this.props.register_item(this.state)}>确认上架</Button>
                    </UploadWrapper>

                    {/*用户控制列表*/}
                    {this.props.auth?
                        <UserBoard>
                            <p>您好！{this.props.user}</p>
                            <AuthButton className={'auth'} onClick={()=>this.handleChange('order','myItems')}>我的上架</AuthButton>
                            <AuthButton className={'auth'}>我的消息</AuthButton>
                            <AuthButton className={'auth'}>我的收藏</AuthButton>
                            <AuthButton className={'auth'} onClick={()=>this.props.logoutUser()}>退出登录</AuthButton>
                            <SearchFrame>这是搜索栏</SearchFrame>
                        </UserBoard>
                        :this.props.history.push('/schoolC2C')}
                </BigPage>
            </Wrapper>
        )
    }
}
export default SchoolC2CUpload;