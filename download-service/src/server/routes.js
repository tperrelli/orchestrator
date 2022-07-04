// const express = require('express');

const setupRoutes = (app) => {
    
    app.get('/downloads/:id', async (req, res, next) => {
        
        try {

            const id = 1;

            if (req.params.id != id) return next(new Error("Invalid download id."));

            const download = await {
                id: id,
                photoId: '123',
                customerId: '123',
                date: new Date()
            };

            return res.json(download);

        } catch(err) {
            return next(err);
        }
    });
};

module.exports = setupRoutes;