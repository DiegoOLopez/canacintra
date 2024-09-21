
const passport = require('passport');
const LocalStrategy = require('./strategies/local.strategy'); // Ajusta el path si es necesario
const JwtStrategy = require('./strategies/jwt.strategy'); // Ajusta el path si es necesario

// Registra la estrategia local con Passport
passport.use(LocalStrategy);
passport.use(JwtStrategy);