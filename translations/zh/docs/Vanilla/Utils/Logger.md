# Logger

如果打印函数对您来说还不够，那么您可以使用日志对象到日志命令、信息警告和更多。

## 访问日志处理程序

您可以使用 `记录器` [全局关键字](/Vanilla/Global_Functions/) 访问格式化处理器。

## 日志记录

- logCommand(消息)；
- logInfo(消息)；
- 日志警告(消息)；
- 日志错误(消息)；

## 可访问但无用的方法

- logError(消息，可浏览异常)；
- logPlayer([IPlayer](/Vanilla/Players/IPlayer/) player);

您不能使用 Java 的螺旋形，所以第一个方法没有用。  
第二个方法绝对没有任何作用。 从字面上讲，执行是空的！