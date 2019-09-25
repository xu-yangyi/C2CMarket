import styled from 'styled-components';

export const RegisterWrapper = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 120px;
	background: #eee;
`;


export const RegisterBlock = styled.div`
    display:flex;
    padding:40px 50px
    justify-content: space-between;
    flex-flow: column nowrap;
    margin:100px auto
    width:500px
    background-color:white
    box-shadow: 4px 4px 8px grey;
	border-radius:10px
`
export const ListItems = styled.div`
    display:flex
    margin:10px 140px 0 40px
    font-size:5px
    color:#56565A
    font-weight:bold
    align-items:center
    justify-content:flex-end
`
export const Input = styled.input`
	display: inline-block;
	width: 180px;
	height: 26px;
	padding: 0 10px;
	color: #777;
`;
export const Button = styled.div`
	width: 80px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	background: #3194d0;
	border-radius: 15px;
	margin: 25px auto;
	text-align: center;
	cursor:pointer
`;
export const Label = styled.div`
    color:red
    font-size:2px
    cursor:pointer
    margin:5px auto -17px auto
`
