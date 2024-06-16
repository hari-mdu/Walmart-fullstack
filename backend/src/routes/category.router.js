import express from 'express';
import { createCategory, deleteCategory, getAllCategories, getCategory, updateCategory } from '../controllers/category.controller.js';

const categoryRouter = express.Router();

// Route to get all categories
categoryRouter.get('/details', getAllCategories);

// Route to get a specific category by ID
categoryRouter.get('/:id', getCategory);

// Route to create a new category
categoryRouter.post('/create', createCategory);

// Route to update a category by ID
categoryRouter.patch('/:id', updateCategory);

// Route to delete a category by ID
categoryRouter.delete('/:id', deleteCategory);

export default categoryRouter;
