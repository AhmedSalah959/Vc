const express = require('express');
const router = express.Router();
const PostController = require("../controllers/post");
const checkAuth = require('../middleware/check-auth');

//get method about show all posts in database
router.get("/home",checkAuth,PostController.home);
//get method about show single post
router.get("/:postId",checkAuth,PostController.view_post);
//post method about make new post
router.post("/:userId/new",checkAuth,PostController.create_post);
//put method about update exist post
router.put("/:postId/edit",checkAuth,PostController.edit_post);
//delete method about delete post
router.delete("/:userId/:postId/delete",checkAuth,PostController.delete_post);


module.exports = router