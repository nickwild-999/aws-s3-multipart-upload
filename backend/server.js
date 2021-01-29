const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
require('dotenv').config();

const app = express()
const port = 4001

app.use(bodyParser.json())

const BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const s3 = new AWS.S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, 
	signatureVersion: process.env.VERSION,
	region: process.env.AWS_REGION
});

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/', (req, res, next) => {
	res.send('Hello World!')
})

app.get('/start-upload', async (req, res) => {

	try {
		let params = {
			Bucket: BUCKET_NAME,
			Key: req.query.fileName,
			ContentType: req.query.fileType
		};

		return new Promise(
			(resolve, reject) => s3.createMultipartUpload(params, (err, uploadData) => {
				if (err) {
					reject(err);
				} else {
					resolve(res.send({ uploadId: uploadData.UploadId }));
				}
			})
		);

	} catch (err) {
		console.log(err)
		return err;
	}
});

app.get('/get-upload-url', async (req, res) => {

	try {
		let params = {
			Bucket: BUCKET_NAME,
			Key: req.query.fileName,
			PartNumber: req.query.partNumber,
			UploadId: req.query.uploadId
		}

		//concurrency!!
		return new Promise(
			(resolve, reject) => s3.getSignedUrl('uploadPart', params, (err, presignedUrl) => {
				if (err) {
					reject(err);
				} else {
					resolve(res.send({ presignedUrl }));
				}
			})
		);
		
	} catch (err) {
		console.log(err);
		return err;
	}

})

app.post('/complete-upload', async (req, res) => {
	try {

		// console.log(req.body, ': body')
		console.log('parts:', req.body.params)

		let params = {
			Bucket: BUCKET_NAME,
			Key: req.body.params.fileName,
			MultipartUpload: {
				Parts: req.body.params.parts
			},
			UploadId: req.body.params.uploadId
		}
		return new Promise(
			(resolve, reject) => s3.completeMultipartUpload(params, (err, data) => {
				if (err) {
					reject(err);
				} else {
					resolve(res.send({ data }));
				}
			})
		);
	} catch (err) {
		console.log(err)
		return err;
	}
})

app.listen(port, () => {
	console.log(`app listening on port ${port}!`);
});