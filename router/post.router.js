const express = require('express');
const router = express.Router();
const formidable = require("formidable");
const { where } = require('sequelize');
const model = require("../models/index.js");
const Post = model.post;

// All
router.get('/api/posts', (req, res) => {
    Post.findAll().then(result => {
        res.status(200).json({data: result});
    }).catch(err => {
        console.error(err);
        throw err;
    });
});

// Get By ID
router.get('/api/posts/:id', (req, res) => {
    Post.findByPk(req.params.id).then(result => {
        if(result == null) {
            res.status(404).json({data: {}});
            return;
        }
        res.status(200).json({data: result});
    }).catch(err => {
        console.error(err);
        throw err;
    });
});

// Create
router.post('/api/posts', (req, res) => {
    const form = formidable({ });

    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        };

        Post.create(fields).then(result => {
            res.status(201).json({
                message: "Created post successfully",
                payload: fields
            });
        });

    });
});
// Update
router.put('/api/posts/:id', (req, res) => {
    const form = formidableMiddleware({ });

    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        };

        Post.findByPk(req.params.id).then(result => {
            if(result == null) {
                res.status(404).json({data: {}});
                return;
            }

            Post.update(fields, {where: {id: req.params.id}}).then(result => {
                res.status(200).json({data: result});
            }).catch(err => {
                console.error(err);
                throw err;
            });
            
        }).catch(err => {
            console.error(err);
            throw err;
        });

    });
});

// Delete
router.delete('/api/posts/:id', (req, res) => {
    Post.findByPk(req.params.id).then(result => {
        if(result == null) {
            res.status(404).json({data: {}});
            return;
        }

        Post.destroy({where: {id: req.params.id}}).then(result => {
            res.status(204).json({data: {}});
        });
        
    }).catch(err => {
        console.error(err);
        throw err;
    });
});

module.exports = router;