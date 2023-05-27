import express from "express";
import APIController from '../controller/APIController';

let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/user', APIController.getAllUsers);
    router.post('/create-user', APIController.createNewUser);
    router.put('/update-user', APIController.updateUser);
    router.post('/delete-user/:id', APIController.deleteUser);
    return app.use('/api/v1/', router)
}

export default initAPIRoute;