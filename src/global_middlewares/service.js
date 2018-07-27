/**
 * Created by yuanjianxin on 2018/4/26.
 */
const appConf=require('../configs/app.config');
const helper=require('yue-helper');
const TaskCore=require('yue-task-core');
module.exports = () => {

    return async(ctx, next) => {
        ctx.$configs=appConf;
        ctx.$helper=helper;
        ctx.$taskCore=TaskCore.instance;
        await next();

    }
};