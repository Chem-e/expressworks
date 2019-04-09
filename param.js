
const express = require('express');
const app = express();
let date=new Date();
app.put('/message/:id', function(req, res){
  const id = req.params.id;
  const str = require('crypto')
    .createHash('sha1')
    .update(date.toDateString() + id)
    .digest('hex');
  res.send(str);
});

app.listen(process.argv[2]);