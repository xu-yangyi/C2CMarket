import styled from 'styled-components';


export const Wrapper=styled.div`
    position:relative
    font-family:sans-serif;
    width:100%
    height:auto
    padding:25px 0
    background-color:#eee
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
export const ChatPage=styled.div`
    width:50%
    height:400px
    margin-left:80px
    margin-bottom:20px
    background-color:#EFF4FB
    border-radius:8px
    overflow:hidden
    display:flex
    box-shadow:1px 1px 4px grey
`
export const UserList=styled.div`
    height:100%
    width:30%
    background-color:#343B48
`
export const UserHead=styled.div`
    height:5%
    width:100%
    color:white
    text-align:center
    font-weight:bold
    padding:8px 0
`
export const User=styled.div`
    height:40px
    width:100%
    padding:5px
    background-color:#323245
    border:1px solid silver
    cursor:pointer
    font-size:14px
    img{
        float:left
        width:40px
        height:40px
        border-radius:9px
        margin-right:6px
    }
    #name{
        display:inline-block
        height:5%
        color:#F3F3F3
    }
    #latest{
        display:inline-block
        margin-top:5px
        height:7%
        color:#F3F3F3
    }
    :hover{
        background-color:#67678C
    }
`


export const MsgList=styled.div`
    height:100%
    width:70%
    background-color:#DEE1E6
`
export const ShowArea=styled.div`
    height:92%
    #head{
        height:5%
        width:100%
        color:#343B48
        text-align:center
        font-weight:bold
        background-color:#D7D7DF
        border-bottom:1px solid white
        padding:9px 0
    }
`
export const SendArea=styled.div`
    width:100%
    height:8%
`
export const Input=styled.input`
    display:inline-block
    width:80%
    height:100%
    padding:0 10px 3px 10px
    color:#343638
`
export const Send=styled.div`
    float:right
    width:14%
    height:100%
    background-color:#343B48
    text-align:center
    padding-top:7px
    color:white
    cursor:pointer
    :hover{
        background-color:grey
    }
`