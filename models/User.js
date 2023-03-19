const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    mailAddress: {type: String, required: true,unique:true},
    comments: [{
        profilID: {type: String, required: true},
        firstNameProfil: {type: String, required: true},
        lastNameProfil: {type: String, required: true},
        specialty: {type: String, required: true},
        comment: {type: String , required: true},
        commentID: {type: String , required: true},
        date: {type: Date, required: true},
    }],

}, {timestamps: true});


UserSchema.statics.findUser = async function (email) {
    let User = await this.findOne({
        mailAddress:email 
    });
    if (!User) {
        return 'not exist'
    }

    return User;
};

UserSchema.statics.findUserByPassword =  async function (email,password) {
    console.log(email);
    let User = await this.findOne({
        password:password,
        mailAddress:email
       
    } , {comments:0,password:0});
    if (!User) {
        return 'not exist'
    }

    return User;
};

UserSchema.statics.getPassword = async function (userID) {
    let User = await this.findOne({
        _id:userID 
    },
    { password:1 , _id:0});
    if (!User) {
        return 'not exist'
    }

    return User;
};

UserSchema.statics.getComments = async function (userID) {
    let User = await this.findOne({
        _id:userID
    },
    {comments:1 , _id:0});
    if (!User) {
        return 'not exist'
    }

    return User;
};
UserSchema.statics.updatePassword = async function (userID,data) {
    let User = await this.updateOne({_id:userID},
        {password:data.newPassword }
        );
    if (!User) {
        return 'le mot de passe n a pas changé'
    }

    return "changement de mot de passe avec succes";
}

UserSchema.statics.addComment = async function (userID, data) {

    let comment = await this.findOneAndUpdate({_id: userID}, {
        $push: {
            comments: {
                commentID:data.commentID,
                profilID:data.profilID,
                firstNameProfil:data.firstNameProfil,
                lastNameProfil:data.lastNameProfil,
                specialty:data.specialty,
                comment: data.comment,
                date:data.date,
              
            }
        }
    },{new: true})

return comment

};

UserSchema.statics.deleteComment = async function (userID, commentID) {
    let comment = await this.findOne({_id: userID, comments: {$elemMatch: {commentID: commentID}}}
    ).updateOne({$pull: {"comments": {commentID: commentID}}})
    if (!comment) {
        return 'not exist'
    }

    return comment;
};
module.exports = mongoose.model("User", UserSchema);
