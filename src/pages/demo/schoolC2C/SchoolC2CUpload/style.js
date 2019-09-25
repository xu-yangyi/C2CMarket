import styled from 'styled-components';


export const Wrapper=styled.div`
    position:relative
    font-family:sans-serif;
    width:100%
    height:auto
    padding:25px 0
    background-color:#eee
    #file{
        display:block
        width:200px
        margin:20px auto 5px auto
        border-radius:2px
    }
`;

export const BigPage=styled.div`
    width:90%
    height:auto
    margin:0 auto
    padding:30px 0 20px 50px
    background-color:white
    border-radius:10px
    border:7px black
    box-shadow:4px 4px 10px silver
`;
export const UploadWrapper = styled.div`
    width:800px
    height:600px
    #show{
        width:170px
        height:150px
    }
    #itemImg{
        display:block
        margin:8px auto
        width:170px
        height:150px
        border:1px dotted grey 
        border-radius:5px
        text-align:center
    }
`
export const InfoWrapper = styled.div`
    display:block
    padding:20px 40px
    margin:0 auto
    border-radius:6px
    border:1px solid silver
    box-shadow:1px 1px 3px grey 
    width:300px
    background-color:#eee
    input{
        border-radius:2px
        margin:0 0 1px 4px
    }
    textarea{
        display:inline-block
        border-radius:2px
        margin:0 0 1px 4px
    }
    
`
export const Button = styled.div`
	width: 80px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	background: #3194d0;
	border-radius: 6px;
	margin: 25px auto;
	text-align: center;
	cursor:pointer
`;

export const UploadError=styled.div`
    margin:4px auto -17px auto
    color:red
    font-size:12px
    font-weight:bold
    text-align:center
`