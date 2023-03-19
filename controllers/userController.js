var User = require('../models/User');

function addUser(req, res,next) {
    /*const hash = bcrypt.hashSync(req.body.password, 10);
req.body.password=hash*/
    let user = new User(req.body);
   
    user.save(function (err,data) {
        if (err) res.send(err);
        else  res.send(data)

    });

  

}

function getUser(req, res,next) {
    let email = req.query.email;
    User.findUser(email ).then(data => {
        res.json(data)
    })
        .catch(err => {
            next(err)
        });

}

function getPaswword(req, res,next) {
    let useID = req.query.userID;
    User.getPassword(useID ).then(data => {
        res.json(data)
    })
        .catch(err => {
            next(err)
        });

}

function getComments(req, res,next) {
    //console.log(req);
    let userID = req.query.userID;
    User.getComments(userID).then(data => {
        res.json(data)
    })
        .catch(err => {
            next(err)
        });

}

function getUserForPassword(req, res,next) {
    let email = req.body.email;
    let password=req.body.passowrd
    User.findUserByPassword(email , password).then(data => {
        res.json(data)
    })
        .catch(err => {
            next(err)
        });

}


function updatePassword(req, res,next) {
    let userID= req.query.userID;
    let body=req.body

    User.getPassword(userID).then(data => {
      if(data!="not exist"){
console.log(data.password, body.oldPassword);
            if (data.password!=body.oldPassword) {
                return res.json( 'Mot de passe incorrect' );
            }
        else{
            User.updatePassword(userID,body).then(data => {
                res.json(data)
            })
                .catch(err => {
                    next(err)
                });
        }
        

       
    }
    })
}
function addComment(req, res, next) {
    let userID = req.query.userID;
    let data = req.body
console.log(data);
    User.addComment(userID, data).then(data => {
        let comment = data.comments[data.comments.length - 1]
        res.json(comment)
    })
        .catch(err => {
            next(err)
        });

}

function deleteComment(req, res, next) {
    let userID = req.query.userID;
    let commentID = req.query.commentID

    User.deleteComment(userID, commentID).then(data => {
        res.json(data)
    })
        .catch(err => {
            next(err)
        });

}

module.exports = {
    addUser,
    getUser,
    getPaswword,
    getComments,
    updatePassword,
    getUserForPassword, 
    addComment, 
    deleteComment
};
