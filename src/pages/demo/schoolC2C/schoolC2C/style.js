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

export const UserBoard=styled.div`
    position:fixed
    top:180px
    right:100px
    width:20%
    font-size:15px
    font-weight:bold
    text-align:center
    line-height:19px
    color:#666B75
    background-color:#F9F9F9
    border-radius:10px
    box-shadow:1px 1px 3px
    p{
        margin-top:30px
    }
`

export const Button=styled.button`
    font-size:13px
    font-weight:bold
    border-radius:6px
    background-color:#C9DAFF
    padding:5px 7px
    margin:20px 30px 20px 40px
`
export const AuthButton=styled.button`
    font-size:13px
    font-weight:bold
    border-radius:6px
    background-color:#C9DAFF
    padding:5px 7px
    margin:10px 20px 10px 25px
`
export const Error=styled.div`
    font-size:10px
    font-weight:bold
    text-align:center
    margin:-4px 0 -15px 0
    color:red
`
export const SearchFrame=styled.div`
    width:80%
    height:30px
    margin:10px auto
    background-color:grey
`