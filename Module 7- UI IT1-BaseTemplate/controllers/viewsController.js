exports.getLandingPAge = async (req, res) => {
  res.status(200).render('overview', {
    title: `Over View`
  
  });
};
exports.getCourse = async (req, res) => {
  res.status(200).render('courses', {
    title: `Get Course`
  });
};

exports.createNewCourse = async (req, res) => {
  res.status(200).render('newCourse', {
    title: `Create New Course`
  });
};
exports.createNewUser = async (req, res) => {
  res.status(200).render('newUser', {
    title: `Create New User`
  });
};
exports.getSignInForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Sign in New User'
  });
};
exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

exports.getLoginUser = (req, res) => {
  const {email, password} = req.body;
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

