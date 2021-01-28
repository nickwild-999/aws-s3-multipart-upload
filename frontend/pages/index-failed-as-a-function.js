import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'

const Index=() => {
 const [fileSelected, setfileSelected]=useState(null)
  const [uploadId, setuploadId]=useState('')
  const [Fred, setFred]=useState('')
  const [fileName, setfileName]=useState('')
  const [fileType, setfileType]=useState('')
  const [uploadPC, setuploadPC]=useState()
  const [backendUrl, setbackendUrl]=useState('http://localhost:4000')

  useEffect(() => {
    if (Fred) // This means if Fred is not default empty state.
    uploadMultipartFile()
  }, [Fred]);
  
  const fileHandler=async(e) =>{
    try {
      let fileSelected = document.getElementById('myfile').files[0]
      let fileName = fileSelected.name
      let fileType = fileSelected.type
      setfileSelected(fileSelected)
      setfileName(fileName)
      setfileType(fileType)
      console.log(fileSelected)
    } catch (err) {
      console.error(err, err.message) 
    }
  }

   const startUpload=async(e) =>{
    try {
      e.preventDefault()
      
      const params = {
        fileName: fileName,
        fileType: fileSelected.type
      };
      
      let resp = await axios.get(`${backendUrl}/start-upload`, { params })
      const { uploadId } = resp.data
      console.log(uploadId)// this is all OK
      setFred(uploadId)
      console.log(Fred)//"This displays the previous cycle: ",
      uploadMultipartFile()
    } catch (err) {
      console.log("startupload ",err)
    }
  }

   const uploadMultipartFile=async() =>{    
    try {
      console.log(Fred)
      const fileSize = fileSelected.size
      const CHUNK_SIZE = 5000000 // 5MB
      const CHUNKS_COUNT = Math.floor(fileSize / CHUNK_SIZE) + 1
      let promisesArray = []
      let start, end, blob
      for (let index = 1; index < CHUNKS_COUNT + 1; index++) {
        start = (index - 1) * CHUNK_SIZE
        end = (index) * CHUNK_SIZE
        blob = (index < CHUNKS_COUNT) ? fileSelected.slice(start, end) : fileSelected.slice(start)

        // Get presigned URL for each part
        let getUploadUrlResp = await axios.get(`${backendUrl}/get-upload-url`, {
          params: {
            fileName: fileName,
            partNumber: index,
            uploadId: Fred,
          }
        })
        console.log (getUploadUrlResp)
        let { presignedUrl } = getUploadUrlResp.data
        // console.log(presignedUrl)
        console.log('   Presigned URL ' + index + ': ' + presignedUrl + ' filetype ' + fileSelected.type)

        // Send part aws server
        let uploadResp = axios.put(presignedUrl, blob, {
          headers: {
            'Content-Type': fileSelected.type
          }
        }).then(resp => {
            setuploadPC:uploadPC+1  
          console.log(parseInt(((uploadPC*CHUNK_SIZE)/fileSize)*100) + "% uploaded" )

          return resp
        })
        
        promisesArray.push(uploadResp)
        
      }

      let resolvedArray = await Promise.all(promisesArray)
      console.log(resolvedArray, ' resolvedAr')

      let uploadPartsArray = []
      resolvedArray.forEach((resolvedPromise, index) => {
        uploadPartsArray.push({
          ETag: resolvedPromise.headers.etag,
          PartNumber: index + 1
        })

      })

      // CompleteMultipartUpload in the backend server
      let completeUploadResp = await axios.post(`${backendUrl}/complete-upload`, {
        params: {
          fileName: fileName,
          parts: uploadPartsArray,
          uploadId: Fred
        }
      })
      setUploadPC:0
      console.log(completeUploadResp.data, "complete upload response")


    } catch (err) {
      console.log(err)
    }
  };

    return (
      <div>
        <form onSubmit={startUpload}>
          <div>
            <p>Upload Dataset:</p>
            <input type='file' id='myfile' onChange={fileHandler} />
            <button type='submit'>
              Upload
            </button>
          </div>
        </form>
      </div>
    )
}

export default Index