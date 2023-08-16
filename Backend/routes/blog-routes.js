import express  from "express";

import { addblog, deleteBlogByd, getAllBlogs, getBlogById, getBlogByUserId, updateBlog } from "../controllers/blog-controller";

const blogRouter=express.Router();

blogRouter.get('/',getAllBlogs)

blogRouter.post('/add',addblog)

blogRouter.put('/update/:id',updateBlog)

blogRouter.get('/:id',getBlogById)

blogRouter.delete('/:id',deleteBlogByd)
  
blogRouter.get("/user/:id",getBlogByUserId)

export default blogRouter