function authToken(req, res, next) {
    // if(req.headers["authorization"] != null) {
    //     // Check Token
    //     next();
    //     return;
    // }
    
    if(req.headers["mrole"] == "admin") {
        // Check Token
        next();
        return;
    } 
    
    if(req.headers["mrole"] == "user" && req.method == "GET") {
        next();
        return;
    }

    if(req.headers["mrole"] == "user" && req.method == "POST") {
        res.status(401).json({error: "Unauthorized access"});
    }

    if(req.headers["mrole"] == "user" && req.method == "PUT") {
        res.status(401).json({error: "Unauthorized access"});
    }

    if(req.headers["mrole"] == "user" && req.method == "DELETE") {
        res.status(401).json({error: "Unauthorized access"});
    }
    // else if (req.headers["mrole"] == "user") {
    
    //     next();
    //     return;
    // }
    res.status(401).json({error: "Unauthorized access"});
}

module.exports = authToken;