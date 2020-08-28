const config={
    production:{
        SECRET: process.env.SECRET,
        DATABASE: "mongodb+srv://Ben:junkkoid123@cluster0.pmofv.mongodb.net/mystory?retryWrites=true&w=majority"
    },
    default: {
        SECRET: "SUPERSECRETPASSWORD123",
        DATABASE:"mongodb+srv://Ben:junkkoid123@cluster0.pmofv.mongodb.net/mystory?retryWrites=true&w=majority"
    }
    
    
}
exports.get= function get(env){
    return config[env]|| config.default
}