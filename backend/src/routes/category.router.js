import express from 'express';
import { createCategory, deleteCategory, getAllCategories, getCategory, updateCategory } from '../controllers/category.controller.js';

const categoryRouter = express.Router();

categoryRouter.get('/details', getAllCategories);
categoryRouter.get('/:id', getCategory);
categoryRouter.post('/create', createCategory);
categoryRouter.patch('/:id', updateCategory);
categoryRouter.delete('/:id', deleteCategory);

export default categoryRouter;