var ArticleProvider = require('../articleprovider-mongodb').ArticleProvider;

var articleProvider = new ArticleProvider('localhost', 27017);

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

exports.blog_id = function(req, res) {
  articleProvider.findById(req.params.id, function(error, article) {
    res.render('blog_show', {title: article.title, article:article});
  });
};

exports.blog_addcomment_post = function(req, res) {
  articleProvider.addCommentToArticle(req.param('_id'), {
    person: req.param('person'),
    comment: req.param('comment'),
    created_at: new Date()
  }, function(error, docs) {
    res.redirect('/blog/' + req.param('_id'))
  });
};
