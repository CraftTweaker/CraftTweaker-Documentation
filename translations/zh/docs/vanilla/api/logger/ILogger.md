# ILogger

基本类用于与 craftminstruer.log 文件和其他伐木器(例如玩家日志) 接口。

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.ILogger
```

## 方法
### debug

记录调试消息。

```zenscript
logger.debug(消息为字符串);
logger.debug("message");
```

| 参数 | 类型     | 描述      |
| -- | ------ | ------- |
| 留言 | String | 要记录的消息。 |


### 错误

记录一个错误消息。

```zenscript
logger.error(消息为字符串);
logger.error("message");
```

| 参数 | 类型          | 说明      |
| -- | ----------- | ------- |
| 留言 | 字符串[string] | 要记录的消息。 |


### 信息

记录信息消息。

```zenscript
logger.info(消息为字符串);
logger.info("message");
```

| 参数 | 类型          | 描述      |
| -- | ----------- | ------- |
| 留言 | 字符串[string] | 要记录的消息。 |


### 警告

记录警告消息。

```zenscript
logger.warning(消息作为字符串);
logger.warning("message");
```

| 参数 | 类型          | 描述      |
| -- | ----------- | ------- |
| 留言 | 字符串[string] | 要记录的消息。 |



