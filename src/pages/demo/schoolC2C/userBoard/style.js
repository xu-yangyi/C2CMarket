import styled from "styled-components";

export const Board=styled.div`
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
    #inSearch{
        width:70%
        transition: width 1s;
    }
    #outSearch{
        width:50%
        transition: width 1s;
    }
    #picShow{
        width:20px
        height:20px
        margin:0 0 -5px -22px
        opacity:1
        transition:all 1s
    }
    #picHid{
        width:20px
        height:20px
        margin:0 0 -5px -22px
        opacity:0
        transition:all 1s
    }
    
    #butShow{
        cursor:pointer
        opacity:1
        transition:all 1.5s
    }
    #butHid{
        opacity:0
        transition:all 1.5s
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
export const SearchFrame=styled.input`
    display:inline-block
    padding:0 0 0 5px
    width:50%
    height:30px
    border-radius:5px
    margin:10px auto
    background-color:white
`
export const SearchButton=styled.div`
    display:inline-block
    width:40px
    padding:6px 0 7px 0
    border-radius:1px
    margin:0 0 0 -39px
    background-color:#3990FF
    color:black
    align-self:center
    font-size:13px
`