const { Router } = require('express')
const octokit = require('./app/services/github')
const { errorHandle } = require('./app/helpers/ErrorHelper')
const api = require('./app/services/facebook')
const routes = Router()



routes.get('/github', async (req,res,next) => {

    try {
        const { data } = await octokit.request("/user");
        res.json(data)
    } catch (error) {
        next(error)
    }

})
routes.get('/facebook', async (req,res,next) => {

    try {
        const { data } = await api.get(`/me?fields=id%2Cname&access_token=${process.env.FACEBOOK_TOKEN}`);
        res.json(data)
    } catch (error) {
        console.log(error)
        // next(error)
    }

})

routes.use((err, req, res, next) => {
    if(!err.statusCode) err.statusCode = 500
    errorHandle(err)
})

module.exports = routes