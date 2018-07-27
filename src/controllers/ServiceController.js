/**
 * Created by yuanjianxin on 2018/4/26.
 */
import BaseController from "./BaseController";

const Functions=require('../lib/Functions');

const uuidv4=require('uuid/v4');

export default class ServiceController extends BaseController {


    /**
     * 添加任务
     * @param ctx
     * @param next
     * @returns {Promise.<*>}
     */
    async addTask(ctx,next){

        let expression=ctx.$body.expression;
        let func=ctx.$body.func;
        let type=ctx.$body.type;

        let attach=ctx.$body.attach; //透传参数

        if(!expression || !type || !func){
            ctx.result={
                code:101,
                message:"Invalid Parameter"
            };
            return await next();
        }

        if(!Functions[func]){
            ctx.result={
                code:102,
                message:"No such method"
            };
            return await next();
        }

        let rule=type === 'cron' ? expression : new Date(expression);

        let taskId=ctx.$body.taskId || uuidv4();

        let result=ctx.$taskCore.addTask(taskId,rule,Functions[func],attach);

        ctx.result={
            code:200,
            message:"OK",
            data:{
                taskId,
                result
            }
        };

        await next();

    }


    /**
     * 删除任务
     * @param ctx
     * @param next
     * @returns {Promise.<*>}
     */
    async removeTask(ctx,next){
        let taskId=ctx.params.taskId;

        if(!taskId){
            ctx.result={
                code:101,
                message:"Invalid Parameter"
            };
            return await next();
        }

        let result=ctx.$taskCore.removeTask(taskId);
        ctx.result={
            code:200,
            message:"OK",
            data:{
                result
            }
        };

        await next();
    }


    /**
     * 检测任务是否存在
     * @param ctx
     * @param next
     * @returns {Promise.<*>}
     */
    async isExist(ctx,next){
        let taskId=ctx.params.taskId;

        if(!taskId){
            ctx.result={
                code:101,
                message:"Invalid Parameter"
            };
            return await next();
        }

        let result=ctx.$taskCore.isExist(taskId);
        ctx.result={
            code:200,
            message:"OK",
            data:{
                result
            }
        };

        await next();
    }


    /**
     * 查看任务下次执行时间
     * @param ctx
     * @param next
     * @returns {Promise.<*>}
     */
    async getNextInvocation(ctx,next){
        let taskId=ctx.params.taskId;

        if(!taskId){
            ctx.result={
                code:101,
                message:"Invalid Parameter"
            };
            return await next();
        }

        let result=ctx.$taskCore.getNextInvocation(taskId);

        ctx.result={
            code:200,
            message:"OK",
            data:{
                result
            }
        };

        await next();
    }


}