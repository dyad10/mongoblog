var ArticleProvider = require('../articleprovider-memory').ArticleProvider;

var articleProvider = new ArticleProvider();

/*
 * GET home page.
 */

exports.index = function(req, res){
  articleProvider.findAll(function(error, docs) {
    res.render('index', { title: 'Blog', articles: docs });
  });
//  res.render('index', { title: 'Express' })
};
