import styled from 'styled-components';


export const Wrapper = styled.div`
    position:relative
    z-index:10
    width:100%;
    height:110px;
    background-color:darkgrey;
    font-weight:bold;
    font-family:Arial,Helvetica,sans-serif;
    color:#DEDEDE;
    #logo{
        float:left
        margin:35px -14px 0 10px;
        width:60px
        height:45px
        vertical-align:middle
    }
    #chai{
        position:absolute
        top:34px
        right:180px
        width:100px
        height:100px
    }
    #big{
        display:inline-block;
        margin:35px 20px 10px 20px;
        font-size:3em;
        color:#FBFBFF;
        }
  `;

export const Categorys=styled.div`
    position:relative
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
        margin:5px 40px 0 0
        text-align:center
    }
    
    #CenterList{
        width:100px
        margin:0 0 3px 1220px
    }
    #demo{
        width:150px
        margin:0 0 3px 450px
    }
    
`
export const CateItem=styled.div`
    display:inline-block;
    text-align:center
    width:150px
    height:35px
    color:#F2F5FF
    cursor:pointer
    padding-top:5px
    font-family:Arial,Helvetica,sans-serif;
    :hover{
        background-color:darkgrey
    }
`

export const ItemList=styled.div`
    display:none
    position:relative
    background-color:#83858B
`
export const ListItem=styled.div`
    width:100%
    text-align:center
    cursor:pointer
    animation: base_show 1s;
    @keyframes base_show {
      0% {opacity: 0}
      100%{opacity: 1;}
    }

`