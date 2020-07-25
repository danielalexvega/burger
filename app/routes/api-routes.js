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
        }).then(results => {
            res.end;
        });
    });

    app.put('/api/:routeName', (req, res, next) => {
        console.log(req.body + 'RIGHT HERE');
        Burger.update(
            {devoured: true},
            {where: {routeName: req.params.routeName}}
        ).then((rowsUpdated) => {
            res.json(rowsUpdated)
        }).catch(next)
    });

}