import express from 'express';
import { userRouter} from './resources/user/user.router';
import { restaurantRouter } from './resources/restaurant/restaurant.router';
import { MenuRouter} from './resources/menuitem/menuitem.router';
import {CategoryRouter} from './resources/category/category.router';
import {OrderRouter} from './resources/order/order.router';
import{ProductRouter} from './resources/product_order/porder.router';
import {CustomerRouter} from './resources/customer/customer.router';
export const restRouter = express.Router();
restRouter.use('/users',userRouter);
restRouter.use('/hotel',restaurantRouter);
restRouter.use('/menu',MenuRouter);
restRouter.use('/category',CategoryRouter);
restRouter.use('/order',OrderRouter);
restRouter.use('/porder',ProductRouter);
restRouter.use('/customer',CustomerRouter);