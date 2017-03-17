var MongoClient = require('mongodb').MongoClient;

var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('58b815a27c0a26ea10c59eef');

MongoClient.connect('mongodb://127.0.0.1:27017/test', function(erro, db) {
    if (erro) throw err;

    db.collection('posts').findOne({ _id: _idProcurado }, function(erro, post) {
        if (erro) throw err;

        console.log(post);
    });

});