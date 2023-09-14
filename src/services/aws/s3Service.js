const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { aws } = require('../../config/env');

const client = new S3Client({ region: aws.REGION });

async function saveObject(objectName, body) {
  const input = {
    Bucket: aws.S3_BUCKET,
    Body: body,
    Key: objectName,
  };

  const command = new PutObjectCommand(input);
  const response = await client.send(command);

  return response;
}

module.exports = {
  saveObject,
};
