/**
 * Created by yuanjianxin on 2018/4/26.
 */

const routers=[];

/**
 * @example
 */
import TestController from "../controllers/TestController";
routers.push({path: '/test', method: 'get', controller: TestController, func: 'test'});


import ServiceController from "../controllers/ServiceController"
routers.push({path:'/addTask',method:'post',controller:ServiceController,func:"addTask"});
routers.push({path:'/removeTask/:taskId',method:'get',controller:ServiceController,func:"removeTask"});
routers.push({path:'/isExist/:taskId',method:'get',controller:ServiceController,func:"isExist"});
routers.push({path:'/getNextInvocation/:taskId',method:'get',controller:ServiceController,func:"getNextInvocation"});

module.exports=routers;