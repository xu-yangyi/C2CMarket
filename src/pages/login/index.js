import React, { PureComponent } from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button,Label } from './style';
import {connect} from "react-redux";
import {login,errorMsg} from "../../redux/user.redux";


@connect(
	state=>state.User,
	{login}
)
class Login extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			pwd: '',
		};
	}
	handleChange(key,val){
		this.setState({
			[key]:val
		})
	}
	render() {
		const { loginStatus } = this.props;
		if (!loginStatus) {
			return (
				<LoginWrapper>
					{this.props.redirectTo? <Redirect to={this.props.redirectTo}/> :null}
					<LoginBox>
						<Input placeholder='账号' onChange={v=>this.handleChange('user',v.target.value)}/>
						<Input placeholder='密码'
                               type='password'
                               onChange={(v)=>this.handleChange('pwd',v.target.value)}/>
                        {/*错误信息提示*/}
                        {this.props.msg?
                            <Label>{this.props.msg}</Label>
                            : null}
						<div id={'zhuce'} onClick={()=>this.props.history.push('/register')}>注册用户</div>
						<Button onClick={() => this.props.login(this.state)}>登陆</Button>
					</LoginBox>
				</LoginWrapper>
			)
		}else {
			return <Redirect to='/'/>
		}
	}
}

export default Login