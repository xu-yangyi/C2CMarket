import styled from 'styled-components';

export const Class_cropper_model=styled.div`
  z-index:10
  position: fixed;
  top: 60;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Model_panel =styled.div`  
    width: 470px;
    height: 350px;
    background: #F0F0F0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`
export const Button_row=styled.div` 
      height: 30px;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      .submit-button {
        background-color:#1377C5
        margin-left:20px
        padding: 1px 3px
        height: 100%;
        color: #383838;
        font-size: 14px;
        border-radius:6px
      }
      .cancel-button {
        margin-left:20px
        padding: 1px 3px
        height: 100%;
        color: #383838;
        font-size: 14px;
        border-radius:6px
      }
`
export const Cropper_container_container =styled.div` 
      flex: 1;
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      height: 100%;
`
export const Cropper_container =styled.div` 
        flex: 0 0 360px;
        margin-right: 20px;
        .cropper {
          width: 100%;
          height: 100%;
        }
`
export const Preview_container=styled.div` 
        flex: 1;
        display: flex;
        align-items: flex-end;
        margin-left:-20px
        .cropper-preview {
          width: 100px;
          height: 100px;
          overflow: hidden;
          border: 1px solid #383838;
        }
`