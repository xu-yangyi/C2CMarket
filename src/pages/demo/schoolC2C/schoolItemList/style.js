import styled from "styled-components";

export const ListWrapper=styled.div`
    width:70%
    padding:10px 0 30px 0
    background-color:#FCFCFC
    box-shadow:1px 1px 5px grey
    border-radius:10px
    .addition{
        display:inline-block
        float:right
        margin:0 20px 0 0
        font-family:sans-serif
        font-size:17px 
        color:#747474
        text-align:center
        cursor:pointer
        :hover{
            font-weight:bold
            text-decoration:underline;
        }
    }
    #logo{
        display:block
        margin:10px auto
    }
    #head{
        display:inline-block
        font-family:sans-serif;
        font-size:18px
        font-weight:bold   
        margin-left:10px 
        color:#747474
    }
    #nothing{
        font-family:sans-serif;
        font-size:30px
        font-weight:bold    
        color:#747474
        text-align:center
        margin:30px auto
    }

`;
export const Items=styled.div`
    width:84%
    height:180px
    margin:10px auto 30px auto
    background-color:#FCFCFC
    box-shadow:1px 1px 5px grey
    border-radius:10px
    
    font-size:15px
    font-weight:bold
    color:#5D463E
    img{
        float:left
        width:170px
        height:150px
        margin:10px 20px 10px 20px
        background-color:white
    }
    #title{
        display:inline-block
        font-size:22px
        font-weight:bold
        color:#384752
    }
    #price{
        display:inline-block
        margin-left:5px
        font-size:17px
        font-weight:bold
        color:#FE5318
    }
    .info{
        display:block
        margin:5px 0 1px 10px 
    }
    #del{
        float:right
        margin:-90px -30px
        padding:2px 2px 2px 4px
        width:15px
        height:15px
        border:1px solid black
        border-radius:10px
        cursor:pointer
    }
`;
export const Intro=styled.div`
    position:relative
    width:50%
    height:50%
    margin:-16px 0 0 285px
    
`
export const Favor=styled.div`
    float:right
    font-weight:bold
    cursor:pointer
    margin:-160px 5px 0 0 
    width:20px
    height:20px
    img{
        width:20px
        height:20px
        margin:0 0
    }
`