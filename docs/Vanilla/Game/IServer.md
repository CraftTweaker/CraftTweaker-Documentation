# 服务端

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。 
`import crafttweaker.server.IServer;`

## 访问服务端处理器
你可使用[全局函数](/Vanilla/Global_Functions)`server`访问服务端处理器

## 检测一个[玩家](/Vanilla/Players/IPlayer)是否是OP
使用下方法检测一个[玩家](/Vanilla/Players/IPlayer) 是否有OP权限：

```
server.isOP(玩家);
```
