const boom = require('@hapi/boom');
const { config } = require('./../config/config')

function checkApiKey(req, res, next){

  const apiKey = req.headers['api'];

  if(apiKey === config.api_key){
    next();
  }else{
    next(boom.unauthorized());
  }

}

function checkAdminRole(req, res, next) {
  const user = req.user;
  console.log("El usuario es " + user);
  if (user.tipo !== 'admin') {
    next(boom.unauthorized());
  } else {
    next();
  }
}

module.exports = { checkApiKey, checkAdminRole }
