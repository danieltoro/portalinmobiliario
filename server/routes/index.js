import express from 'express'

// Controllers Imports
import basicController from './../controllers/basicController'
import userController from './../controllers/userController'
import postController from './../controllers/postController'
import commentController from './../controllers/commentController'
import propertyController from './../controllers/propertyController'

const routes = express()


// Basic Routes
routes.get('/', basicController.get)

// User Routes
routes.post('/signup', userController.post)

// Post Routes
routes.post('/post', postController.post)
routes.get('/posts', postController.getAll)

// Comment Routes
routes.post('/comment', commentController.post)

// Property Routes
routes.post('/property', propertyController.post)
routes.get('/properties', propertyController.getAll)

export default routes
