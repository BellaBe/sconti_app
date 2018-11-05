module.exports = {
  index(req, res){
    res.render('city');
  },
  list(req, res){
    res.render('cities');
  }
}