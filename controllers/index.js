exports.index=function(req, res, next) {
    res.render('index', { title: 'Express' });
  }

  //renders an html page from the 