const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
db.select('*')
.from('posts')
.then(posts => {
res.status(200).json(posts);
})
.catch(error => {
    //handle the error
    res.status(500).json(error);
});
});

router.get('/:id', (req, res) => {
db.select('*')
.from('posts')
.where('id', '=', req.params.id)
.then(post => {
    res.status(200).json(post);
    })
    .catch(error => {
        //handle the error
        res.status(500).json(error);
    });
});

router.post('/', (req, res) => {
    const postData =  req.body
    //validate the data beofre saving it to the database. NEVER TRUST THE CLIENT!!
    db('posts').insert(postData, 'id')
    .then(ids => {
        res.status(200).json(ids);
        })
        .catch(error => {
            //handle the error
            res.status(500).json(error);
        });
});

router.put('/:id', (req, res) => {
db('posts').where({id : req.params.id}).update(req.body)
.then(count => {
    res.status(200).json(count);
    })
    .catch(error => {
        //handle the error
        res.status(500).json(error);
    });
});

router.delete('/:id', (req, res) => {
    db('posts')
    .where({id : req.params.id})
    .del()
    .then(count => {
        res.status(200).json(count);
        })
        .catch(error => {
            //handle the error
            res.status(500).json(error);
        });
});

module.exports = router;