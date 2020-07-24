const Burger = require('../models/burger.js');

module.exports = (app) => {
    app.get('/api/all', (req, res) => {
        Burger.findAll({}).then((results) => {

            res.json(results);
        });
    });

    app.post('/api/new', (req, res) => {
        Burger.create({
            routeName: req.body.routeName,
            burgerName: req.body.burgerName,
            devoured: false
        }).then(resules => {
            res.end;
        });
    });

    app.put('/api/:routeName', (req, res, next) => {
        console.log(req.params.routeName);
        Burger.update(
            {devoured: true},
            {returning: true, where: {routeName: req.params.routeName}}
        ).then((rowsUpdated) => {
            res.json(rowsUpdated)
        }).catch(next)
    });

}