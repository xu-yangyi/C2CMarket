import React, { PureComponent } from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import { RegisterWrapper,RegisterBlock,Input,ListItems,Button,Label } from "./style";
import {connect} from "react-redux";
import {register} from "../../redux/user.redux";



@withRouter
@connect(
	state=>state.User,
	{register}
)
class Register extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			pwd: '',
			repeat:'',
			contact:'',
		};
	}
	render() {
		return (
			<RegisterWrapper>
				{this.props.redirectTo? <Redirect to={this.props.redirectTo}/> :null}
				<RegisterBlock>
					<ListItems>用 户 名:　
						<Input placeholder="2-10个字符" onChange={v=>this.setState({['user']:v.target.value})}/></ListItems>
					<ListItems>密　 码:　
						<Input placeholder="6-13个字符" type={'password'} onChange={v=>this.setState({['pwd']:v.target.value})}/></ListItems>
					<ListItems>确认密码:　
						<Input placeholder="6-13个字符" type={'password'} onChange={v=>this.setState({['repeat']:v.target.value})}/></ListItems>
					<ListItems>联系方式:　
						<Input placeholder="选填，方便联系：)" onChange={v=>this.setState({['contact']:v.target.value})}/></ListItems>
					{/*错误信息提示*/}
					{this.props.msg?
						<Label>{this.props.msg}</Label>
						: null}
					<Button onClick={()=>this.props.register(this.state)}>注册</Button>
				</RegisterBlock>
			</RegisterWrapper>
		)
	}
}

export default Register