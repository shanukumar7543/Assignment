const express = require("express");

const user_Routes = express.Router();


const {getdata ,post, update, } = require("../Controller/user.controller")
const {userValidate} = require('../Validattion')
/**
 * @swagger
 * components:
 *      schemas:
 *             user:
 *                  type: object
 *                  properties:
 *                     user_id:
 *                           type: string 
 *                     user_name:
 *                           type: string
 *                     address:
 *                           type: string 
 *                     mob_no:
 *                           type: string
 *                     email:
 *                         type: string
 *                                 
 *                  
 */



/**
 * @swagger
 * /user/view:
 *        get:
 *             summary: Get
 *             description: This api is for get the all data
 *             responses:
 *                  200:
 *                      description: to test the Get method
 *                      content:
 *                           application/json:
 *                                  schema:
 *                                      type: array
 *                                      items:
 *                                          $ref : '#components/schemas/user'    
 * 
 */

user_Routes.get("/view",getdata );

/**
 * @swagger
 * /user/add:
 *      post:
 *         summary: Post
 *         description: This api is for post the  data
 *         requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                           $ref : '#components/schemas/user'
 *      responses:
 *            200:
 *                description: added sucessfully
 *                  
 *                  
 * 
 * 
 * 
 */


user_Routes.post("/add",  post);

/**
 * @swagger
 * /user/update/{user_id}:
 *      patch:
 *         summary: Update
 *         description: This api is for update the  data
 *         parameters:
 *             - in: path
 *               name: user_id
 *               required: true
 *               description: user_id is required
 *               schema:
 *                 type: integer 
 *         requestBody:
 *               required: true
 *               content:
 *                   application/json:
 *                              schema:
 *                                 $ref : '#components/schemas/user'
 *         responses:
 *              200:
 *                  description: updated sucessfully
 *                  content:
 *                       application/json:
 *                              schema:
 *                                 type: array
 *                                 items:
 *                                       $ref : '#components/schemas/user'
 * 
 */



user_Routes.patch("/update/:user_id", update);



module.exports = {user_Routes}

