import styled from 'styled-components';


export const Wrapper = styled.div`
    position:fixed;
    top:0;
    width:100%;
    height:110px;
    background-color:#757A87;
    font-weight:bold;
    font-family:Arial,Helvetica,sans-serif;
    color:#DEDEDE;
    img{
        float:left
        margin:35px -14px 0 10px;
        width:60px
        height:45px
        vertical-align:middle
    }
    #big{
        display:inline-block;
        margin:35px 20px 10px 20px;
        font-size:3em;
        color:#FBFBFF;
    }
  `;

export const Categorys=styled.div`
    margin-top:10px
    width:100%
    height:40px
    background-color:#83858B
    font-weight:bold
    line-height:30px
    #login{
        cursor:pointer
        float:right
        display:inline-block;
        margin:5px 60px 0 0
        text-align:center
    }
    
`
export const CateItem=styled.div`
    color:#F2F5FF
    display:inline-block;
    margin:5px 30px 5px 50px
    font-family:Arial,Helvetica,sans-serif;
    
`