express = require('express');
exp = express();


exp.get('/main.html',function(res,req){
  req.sendFile(__dirname + "/main.html");
});


exp.set('view engine','ejs');
exp.use('/public',express.static('public'));

exp.listen(3000);
