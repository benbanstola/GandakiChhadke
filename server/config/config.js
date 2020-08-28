const config={
    production:{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default: {
        SECRET: "SUPERSECRETPASSWORD123",
        DATABASE:"mongodb+srv://Ben:junkkoid123@cluster0.pmofv.mongodb.net/mystory?retryWrites=true&w=majority"
    }
    
    
}
exports.get= function get(env){
    return config[env]|| config.default
}