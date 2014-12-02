module.exports = {
    // mongoose schema, if you need project-specific config
    config: {
        cucumber: {
            use_custom: {type: Boolean, default: false},
            repository_cucumber: {type: String, default: 'http://github.com'}
            
        }
    }
};