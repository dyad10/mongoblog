var ArticleProvider = require('../articleprovider-memory').ArticleProvider;

var articleProvider = new ArticleProvider();

/*
 * GET home page.
 */

exports.index = function(req, res){
  articleProvider.findAll(function(error, docs) {
    res.render('index', { title: 'Blog', articles: docs });
  });
};

exports.blog_new = function(req, res) {
  res.render('blog_new', {title: 'New Post'});
};

exports.blog_new_post = function(req, res) {
  articleProvider.save({
    title: req.param('title'),
    body: req.param('body')
  }, function( error, docs) {
    res.redirect('/')
  });
};
