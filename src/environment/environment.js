module.exports = {
    api: {
        port: process.env.PORT || 3000
    },
    db: {
        url: 'mongodb+srv://lucas:Abc123@@cluster0.8wt1f.mongodb.net/pipedrive-bling-integration?retryWrites=true&w=majority',
        options: {
            poolSize: 5, 
            useNewUrlParser: true, 
            useUnifiedTopology: true
        }
    },
    pipedriveAcess: {
        user: 'lucasoliveira',
        properties: '(id,title,value,currency,status)',
        api_token: '2b1a3c4f0f9c0c05b394bef8d2413ab3e9dbbb60'
    }
}