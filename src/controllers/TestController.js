/**
 * Created by yuanjianxin on 2018/4/26.
 */
import BaseController from "./BaseController";
export default class TestController extends BaseController {

    async test(ctx,next){
        ctx.result="Hello,world";

        console.log('===请求的参数',ctx.$query);

        await next();
    }


}