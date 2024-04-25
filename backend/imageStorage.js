// Load the AWS SDK
const AWS = require('aws-sdk');

const initializeImageStorage = () => {
    AWS.config.update({
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        region: 'us-east-2'
    });

    // Create S3 Service object
    const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
    return s3;
};

module.exports = { initializeImageStorage }