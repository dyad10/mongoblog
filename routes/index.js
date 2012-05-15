<<<<<<< HEAD
var ArticleProvider = require('../articleprovider-memory').ArticleProvider;

var articleProvider = new ArticleProvider();
=======
>>>>>>> 3f5b4073dc372ed3bcc1fbe943aca960cf160712

/*
 * GET home page.
 */

exports.index = function(req, res){
<<<<<<< HEAD
  articleProvider.findAll(function(error, docs) {
    res.render('index', { title: 'Blog', articles: docs });
  });
//  res.render('index', { title: 'Express' })
};
=======
  res.render('index', { title: 'Express' })
};
>>>>>>> 3f5b4073dc372ed3bcc1fbe943aca960cf160712
