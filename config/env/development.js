module.exports = {
    // mongoUri: 'mongodb://localhost/myFirstNode',
    // or use
    mongoUri: 'mongodb://admin:password@ds113636.mlab.com:13636/users',
    debug: true,
    sessionSecret: 'dev_secret_key',
    google: {
        clientID: '<CLIENT>',
        clientSecret: '<CLIENT>',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
}
