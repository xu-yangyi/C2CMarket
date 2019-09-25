import React from "react";
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';



const cropper = React.createRef();

class PicCropper extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            src:'',
        }
    }

    componentDidMount() {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            const dataURL = e.target.result;
            this.setState({src: dataURL})
        }
        console.log(this.props)
        fileReader.readAsDataURL(this.props.uploadedImageFile) //this.props=>需要父组件传入该参数
    }
    render() {
        return (
            <Cropper
                src={this.state.src}
                className="company-logo-cropper"
                ref={cropper}

                viewMode={1}
                zoomable={false}
                aspectRatio={17/15}  // 设置比例的参数
                guides={false}
                preview='.cropper-preview'
            />
        )
    }
}
export default PicCropper

// handleSubmit = () => {
//     if (!this.state.submitting) {
//         let url = `/homepage_images`
//         // 拿到文件名
//         let filename = this.props.uploadedImageFile.name
//
//         message.info("正在上传图片")
//         // TODO: 这里可以尝试修改上传图片的尺寸
//         this.cropper.getCroppedCanvas().toBlob(async blob => {
//             // 创造提交表单数据对象
//             const formData = new FormData()
//             // 添加要上传的文件
//             formData.append('file', blob, filename)
//             // 提示开始上传
//             this.setState({submitting: true})
//             // 上传图片
//             const resp = await http.post(url, formData)
//             // 拿到服务器返回的数据
//             this.props.onUploadedFile(resp.data.data)
//             // 提示上传完毕
//             this.setState({submitting: false})
//             // 关闭弹窗
//             this.props.onClose()
//         })
//     }
// }


// handleFileChange = (e) => {
//     const file = e.target.files[0]
//
// if (file) {
//     if (file.size <= MAX_FILE_SIZE) {
//
//         this.setState({
//             selectedImageFile: file,
//         }, () => {
//             this.setState({
//                 editImageModalVisible: true,
//             })
//         })
//     } else {
//         message.error("文件过大")
//     }
// }
//
// e.target.value = ''
// }