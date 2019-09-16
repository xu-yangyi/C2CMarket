import styled from 'styled-components';

export const LoginWrapper = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 120px;
	background: #eee;
`;

export const LoginBox = styled.div`
	width: 400px;
	height: 180px;
	margin: 100px auto;
	padding-top: 20px;
	background: #fff;
	box-shadow: 8px 8px 8px rgba(0,0,0,.1);
	border-radius:6px
	#zhuce{
	    margin:-6px 0 -4px 255px
        color:grey
        font-size:2px
        cursor:pointer
	}
	#zhuce:hover{
	    color:black
	    text-decoration:underline;
	    font-weight:bold
	}
`;

export const Input = styled.input`
	display: block;
	width: 200px;
	height: 30px;
	line-height: 30px;
	padding: 0 10px;
	margin: 10px auto;
	color: #777;
`;

export const Button = styled.div`
	width: 220px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	background: #3194d0;
	border-radius: 15px;
	margin: 10px auto;
	text-align: center;
`;

export const Label = styled.div`
    margin:-6px 0 -12px 85px
    color:red
    font-size:2px
    cursor:pointer
`