const firebase = require('firebase-admin');

function authMiddleware(request, response, next) {
    const headerToken = request.headers.authorization;
    console.log('header token:', headerToken);
}

module.exports = authMiddleware;