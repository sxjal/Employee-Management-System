// backend/middleware/passport.js
const { Strategy, ExtractJwt } = require('passport-jwt');
const db = require('../db');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'your_jwt_secret', // Replace with your secret
};

module.exports = passport => {
  passport.use(
    new Strategy(opts, (jwt_payload, done) => {
      db.query('SELECT * FROM users WHERE id = ?', [jwt_payload.id], (err, results) => {
        if (err) return done(err, false);
        if (results.length > 0) return done(null, results[0]);
        return done(null, false);
      });
    })
  );
};
