# TaskService

### How to use

* 安装
	* `git clone xxxx.git`
	* `cd <exist_floder>` 
	* `npm i`
* 配置
	* 在`src/lib/Functions.js`中定义定时任务 
* 启动
	* `sh start.sh`


### API

##### 1.添加任务

Url: `/addTask`

Method:`POST`

Params:

| 字段 | 释义 | 示例
| --- | --- | ---
| taskId | 任务id 可不传，由系统分配taskId,也可传入指定| `ad64f74d-bc68-4af5-8c4f-c63520708f91`
| expression | crontab 表达式 或 时间戳 | `*/5 * * * * *` / `1532678813959`
| type | 表达式类型 `cron`/`timestamp` | `cron`
| func | 要执行的方法名称,方法名称须是Functions中定义好的方法 | `test`
| attach | 透传参数，多个参数以数组形式传 | `"test"` / `["a","b","c"]`

Return:

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "taskId": "ad64f74d-bc68-4af5-8c4f-c63520708f91",
    "result": true
  }
}
```

##### 2.删除任务

Url: `/removeTask/:taskId`

Method: `GET`

Return:

```json
{
	"code":200,
	"message":"OK",
	"data":{
		"result":true
	}
}
```

##### 3.检测任务是否存在

Url: `/isExist/:taskId`

Method: `GET`

Return:

```json
{
	"code":200,
	"message":"OK",
	"data":{
		"result":true
	}
}
```

##### 4.获取任务下次执行时间

Url: `/getNextInvocation/:taskId`

Method: `GET`

Return:

```json
{
	"code":200,
	"message":"OK",
	"data":{
		"result":"2018-07-27T08:29:35.000Z"
	}
}
```