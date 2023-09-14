const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { aws } = require('../../config/env');
const logger = require('../../utils/logs/logger');

const client = new S3Client({ region: aws.REGION });

async function saveObject(objectName, body) {
  logger.debug(`putting object into bucket. objectName: ${objectName}`);

  const input = {
    Bucket: aws.S3_BUCKET,
    Body: body,
    Key: objectName,
  };

  const command = new PutObjectCommand(input);
  const response = await client.send(command);

  logger.debug(`object ${objectName} saved successfully`);

  return response;
}

module.exports = {
  saveObject,
};
