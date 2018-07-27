/**
 * Created by yuanjianxin on 2018/4/26.
 */
module.exports = {
    port: process.env.APP_PORT || 8010,
    secretKey:'Yue.',
    bodyConf: {
        jsonLimit: "5mb",
        formLimit: "5mb",
        textLimit: "5mb",
        multipart: true
    },
    globalMiddlewareConf: './src/global_middlewares',  //全局中间键路径配置

};