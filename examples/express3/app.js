var express = require('express')
  , marked = require('marked-engine')
  , app = express();

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.engine('md', marked.renderFile);
  app.use(express.logger());
});

app.get('/', function(req, res){
  res.render('index.md');
});

app.listen(3000);
