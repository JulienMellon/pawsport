module.exports = {
  getIndex: (req, res) => {
    res.render("splash.ejs");
  },

  getSplash: (req, res) => {
    res.render("splash.ejs")
  }, 

  getTestPage: (req, res) =>{
    res.render("test.ejs")
  }
};
