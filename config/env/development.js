module.exports = {
    // mongoUri: 'mongodb://localhost/myFirstNode',
    // or use
    mongoUri: 'mongodb://admin:password@ds113636.mlab.com:13636/users',
    debug: true,
    sessionSecret: 'dev_secret_key',
    google: {
        clientID: '649580014773-lov0s057rv49d1jpoajds2cqft1dptm7.apps.googleusercontent.com',
        clientSecret: '1Im94qvZST0IPkfwSDXkaC33',
        //         callbackURL: 'http://localhost:3000/oauth/google/callback'
        callbackURL: 'https://test-deploy-node-app.herokuapp.com/oauth/google/callback'
    }
}
