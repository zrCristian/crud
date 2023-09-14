const { S3Client, PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const { aws } = require('../../config/env');
const logger = require('../../utils/logs/logger');

const client = new S3Client({ region: aws.REGION });
const BUCKET = aws.S3_BUCKET;

async function saveObject(objectName, body) {
  logger.debug(`putting object into bucket. objectName: ${objectName}`);

  const input = {
    Bucket: BUCKET,
    Body: body,
    Key: objectName,
  };

  const command = new PutObjectCommand(input);
  const response = await client.send(command);

  logger.debug(`object ${objectName} saved successfully`);

  return response;
}

async function deleteObject(objectName) {
  logger.debug(`deleting s3 object ${objectName}`);

  const input = {
    Bucket: BUCKET,
    Key: objectName,
  };

  const command = new DeleteObjectCommand(input);
  await client.send(command);

  logger.debug(`${objectName} was deleted successfully`);
}

module.exports = {
  saveObject,
  deleteObject,
};
