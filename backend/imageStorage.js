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

const getImageUrl = () => {
    const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg',
                    '5.jpg', '6.jpg', '7.jpg', '8.jpg',
                    '9.png', '10.jpg'];

    const urls = [];

    for (let i of images) {
        urls.push(s3.getSignedUrl('getObject', {
            Bucket: 'artscape-images',
            Key: 'images/' + i,
            Expires: 60
        }));
    }
    
    ;
    return urls;
}

module.exports = { initializeImageStorage, getImageUrl }