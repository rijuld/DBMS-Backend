exports.get_landing=function(req, res, next) {
    res.render('landing', { title: 'Express' });
  }

  //renders an html page from the 