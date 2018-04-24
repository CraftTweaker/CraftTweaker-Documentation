# 服务端

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。
`import crafttweaker.server.IServer;`

## Access the Server Handler
You can access the Brewing Handler using the `server` [global keyword](/Vanilla/Global_Functions).  
Alternatively you can get the server from any [ICommandSender](/Vanilla/Commands/ICommandSender).

## 检测一个[玩家](/Vanilla/Players/IPlayer)是否是OP
使用下方法检测一个[玩家](/Vanilla/Players/IPlayer) 是否有OP权限：

```
server.isOP(player);
```

## Get the command manager
You can use this to get the [ICommandManager](/Vanilla/Commands/ICommandManager)
```
server.commandManager;
```
