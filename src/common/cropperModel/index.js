import React, { Component } from 'react'

import Cropper from 'react-cropper' // 引入Cropper
import 'cropperjs/dist/cropper.css' // 引入Cropper对应的css

import './style'
import {
  Class_cropper_model,
  Model_panel,
  Cropper_container_container,
  Button_row,
  Cropper_container,
  Preview_container
} from "./style";

//父组件应传入两个方法
//submitImg()提交剪切后的图片数据,加载入父子间中
//closeComponent()关闭该组件显示
class CroppweModel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      src: null,
      showPanel:true,
      submitting:false,
      blobData:null,
    }
  }

  componentDidMount() {
    const fileReader = new FileReader()
    fileReader.onload = e => {
      const dataURL = e.target.result
      this.setState({ src: dataURL })
    }
    fileReader.readAsDataURL(this.props.uploadedImageFile)
  }
  handleSubmit = () => {
    if (!this.state.submitting) {
      // let url = `/homepage_images` // 你要上传的url
      // 拿到文件名
      // let filename = this.props.uploadedImageFile.name

      console.log('正在上传图片')
      // TODO: 这里可以尝试修改上传图片的尺寸
        let imgURL=this.cropper.getCroppedCanvas().toDataURL('\'image/jpeg\'')

        this.props.submitImg(imgURL)
        this.props.closeComponent()
      }
  }

  render() {
    return (
        <Class_cropper_model>
        {this.state.showPanel?
            <Model_panel>
              <Cropper_container_container>
                <Cropper_container>
                  <Cropper
                      src={this.state.src}
                      className="cropper"
                      ref={cropper => (this.cropper = cropper)}
                      // Cropper.js options
                      style={{height: 300, width:300}}
                      viewMode={1}
                      zoomable={false}
                      aspectRatio={17/15} // 固定为1:1  可以自己设置比例, 默认情况为自由比例
                      guides={false}
                      preview=".cropper-preview"
                  />
                </Cropper_container>
                <Preview_container>
                  <div className="cropper-preview" />
                </Preview_container>
              </Cropper_container_container>
              <Button_row>
                <button className="submit-button" onClick={this.handleSubmit}>
                  点击提交
                </button>
                <button className="cancel-button" onClick={()=>this.props.closeComponent()}>
                  取消上传
                </button>
              </Button_row>
            </Model_panel>
          :null}
        </Class_cropper_model>
    )
  }
}
export default CroppweModel