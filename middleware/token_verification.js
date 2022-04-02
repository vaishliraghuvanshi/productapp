const jwt = require('jsonwebtoken');
exports.verifyToken = (request, response, next) => {
    try {
        console.log('token ' + request.headers.authorization);
        if (!request.headers.authorization)
          return response.status(401).send('unauthorized request');
        if(request.headers.authorization==null)
          return response.status(401).send('unauthorized request');
          
        let token=request.headers.authorization.split(" ")[1];
        let payload=jwt.verify(token,'aaabbbccc');
        console.log(payload);
        next();    
    }
    catch(err){
        // console.log(response);
        return response.status(401).send('unauthorized Request');
    }
}