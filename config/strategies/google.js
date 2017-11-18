const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const config = require('../config.js');
const user = require('../../app/controllers/user.controller');

module.exports = () => {
    passport.use(new GoogleStrategy({
        clientID: config.google.clientID,
        clientSecret: config.google.clientSecret,
        callbackURL: config.google.callbackURL,
        passReqToCallback: true
    }, function (req, accessToken, refreshToken, profile, done) {
        var providerData = profile._json;
        providerData.accessToken = accessToken;
        providerData.refreshToken = refreshToken;
        var providerUserProfile = {
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
            username: profile.displayName,
            provider: 'google',
            providerId: profile.id,
            providerData: providerData
        }
        user.saveOAuthUserProfile(req, providerUserProfile, done);
    }));
}
