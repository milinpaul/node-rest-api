const home = (req, res) => {
  res.status(200).json({
    sucess: true,
    message: 'Welcome to Root Api Endpoint',
  });
};

export default home;
