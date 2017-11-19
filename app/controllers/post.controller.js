var Post = require('mongoose').model('Post');
var path = require("path");

exports.getAll = (req, res, next) => {
      Post.find((err, data) => {
          if (err) {
              console.log('Failure: ' + err);
              return next(err);
          }
          else {
              console.log(data);
              res.json(data);
          }
      });
}

exports.getOne = (req, res, next) => {
        Post.findOne({ _id: req.params.id }, (err, data) => {
            if (err) {
                console.log('Failure: ' + err);
                return next(err);
            }
            else {
                console.log(data);
                res.json(data);
            }
        });
}

exports.getMyPost = (req, res, next) => {
    if (req.user) {
        var username = req.params.username;
        console.log(username);
        Post.find({ author: username }, (err, data) => {
            if (err) {
                console.log('Failure: ' + err);
                return next(err);
            }
            else {
                console.log(data);
                res.json(data);
            }
        }).sort({ time: 'desc' });
    }
}

exports.create = (req, res, next) => {
        var post = new Post(req.body);
        post.author = req.body.user.username;
        post.save(function (err) {
            if (err) {
                res.status(400).send({
                    message: err
                });
            }
            else {
                res.json(post);
            }
        });
}
