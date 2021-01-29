import React, { Component } from 'react'
import axios from 'axios'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileSelected: null,
      uploadId: '',
      fileName: '',
      backendUrl: 'http://localhost:4001',
      uploadPC:0,
      progressArray:[],
      uploadProgress:0
    }
  }

  async fileHandler(event) {
    try {
      let fileSelected = event.target.files[0]
      let fileName = fileSelected.name
      this.setState({ fileSelected })
      this.setState({ fileName })
    } catch (err) {
      console.error(err, err.message) 
    }
  }
  
  async startUpload(event) {
    try {
      event.preventDefault()
      const params = {
        fileName: this.state.fileName,
        fileType: this.state.fileSelected.type
      };
      // console.log("fs", this.state.fileSelected)
      // console.log("params:",params)
      console.log(this.state.progressArray)

      let resp = await axios.get(`${this.state.backendUrl}/start-upload`, { params })
      let { uploadId } = resp.data
      this.setState({ uploadId })
      this.uploadMultipartFile()

    } catch (err) {
      console.log(err)
    }
  }

  async uploadMultipartFile() {
    try {
      // console.log('Inside uploadMultipartFile')
      const fileSize = this.state.fileSelected.size
      const CHUNK_SIZE = 10000000 // <5MB
      const CHUNKS_COUNT = Math.floor(fileSize / CHUNK_SIZE) + 1

      let promisesArray = []
      let start, end, blob

      for (let index = 1; index < CHUNKS_COUNT + 1; index++) {
        start = (index - 1) * CHUNK_SIZE
        end = (index) * CHUNK_SIZE
        blob = (index < CHUNKS_COUNT) ? this.state.fileSelected.slice(start, end) : this.state.fileSelected.slice(start)

        console.log(blob.size)
        // Get presigned URL for each part
        let getUploadUrlResp = await axios.get(`${this.state.backendUrl}/get-upload-url`, {
          params: {
            fileName: this.state.fileName,
            partNumber: index,
            uploadId: this.state.uploadId
          }
        })

    //upload progress handler
    const uploadProgressHandler=async(progressEvent, blob, index) =>{
      if (progressEvent.loaded >= progressEvent.total) return;
      const currentProgress = Math.round((progressEvent.loaded * 100) / progressEvent.total);  
      this.setState(progressArray =>{this.state.progressArray[index-1] = currentProgress});
        const sum = this.state.progressArray.reduce((acc, curr) => acc + curr);
        this.setState({uploadProgress:Math.round(sum / CHUNKS_COUNT)});
        console.log(this.state.progressArray)
        console.log(this.state.uploadProgress)
    }
        let { presignedUrl } = getUploadUrlResp.data
        // console.log('   Presigned URL ' + index + ': ' + presignedUrl + ' filetype ' + this.state.fileSelected.type)
        
        // Send part aws server
        let uploadResp = axios.put(presignedUrl, blob, {
          onUploadProgress: (e) => uploadProgressHandler(e, CHUNKS_COUNT, index),
          headers: {
            'Content-Type': this.state.fileSelected.type
          },
        })
        
        promisesArray.push(uploadResp)
        
      }

      let resolvedArray = await Promise.all(promisesArray)
      console.log(resolvedArray, ' resolvedArray')

      let uploadPartsArray = []
      resolvedArray.forEach((resolvedPromise, index) => {
        uploadPartsArray.push({
          ETag: resolvedPromise.headers.etag,
          PartNumber: index + 1
        })

      })
      console.log(uploadPartsArray)
      console.log("uploadId:", this.state.uploadId)
      console.log(this.state.fileName)


      // CompleteMultipartUpload in the backend server
      let completeUploadResp = await axios.post(`${this.state.backendUrl}/complete-upload`, {
        params: {
          fileName: this.state.fileName,
          parts: uploadPartsArray,
          uploadId: this.state.uploadId
        }
      })
   
      console.log(completeUploadResp.data, "complete upload response")


    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.startUpload.bind(this)}>
          <div>
            <p>Upload Dataset:</p>
            <input type='file' id='file' onChange={this.fileHandler.bind(this)} />
            <button type='submit'>
              Upload
            </button>
            <div>{this.state.uploadProgress}% uploaded</div>
          </div>
        </form>
      </div>
    )
  }
}