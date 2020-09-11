//bring the application / routes with express
const app = require('./app')
const environment = require('./environment/environment')

//router of test and show headers and more information
app.get('/', (req, resp) => {
    resp.json(req.headers)
})

app.listen(environment.api.port, () => console.log(`Server is running on port ${environment.api.port}`))