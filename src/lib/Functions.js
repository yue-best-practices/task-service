/**
 * Created by yuanjianxin on 2018/7/27.
 */
const HttpUtil=require('yue-http-util');

module.exports={

    //todo more


    /**
     * @example
     */
    async test(str){

        let method="get";
        let url="http://localhost:8010/test";
        let data={str};
        let res=await HttpUtil.instance.sendRequest(method,url,data,{});
        console.log('==res==',res);
    }

};