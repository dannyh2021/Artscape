const firebase = require('firebase-admin');

function authMiddleware(request, response, next) {
    const headerToken = request.headers.authorization;
    console.log('header token:', headerToken);
    return next();
}

module.exports = authMiddleware;