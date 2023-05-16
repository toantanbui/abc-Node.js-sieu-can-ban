import express from 'express';
import homeController from '../controller/homeController'
let router = express.Router();
// const app = express()
const iniWebRoute = (app) => {

    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:id', homeController.getDetailPage);
    router.post('/create-new-user', homeController.createNewUser);
    router.post('/delete-user', homeController.deleteUser);
    router.get('/edit-user/:id', homeController.getEditPage);
    router.post('/update-user', homeController.postUpdateUser)
    router.get('/toan', (req, res) => {
        res.send('Tao la Toan')
    })

    return app.use('/', router);

}

export default iniWebRoute;