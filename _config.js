var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://<Omondivictor120>:<6N0Kc4PdAR2UmeYN>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://<Omondivictor120>:<6N0Kc4PdAR2UmeYN>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
