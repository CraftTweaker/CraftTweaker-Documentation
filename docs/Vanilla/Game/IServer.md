# 服务端（IServer）

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。
`import crafttweaker.server.IServer;`

## 访问服务器处理器
你可以通过  `server` [全局关键字](/Vanilla/Global_Functions) 来访问 Brewing Handler。  
当然，你也可以通过任意一个 [ICommandSender](/Vanilla/Commands/ICommandSender) 来获取服务器。

## 检测一个[玩家](/Vanilla/Players/IPlayer)是否是OP
使用下方法检测一个[玩家](/Vanilla/Players/IPlayer) 是否有OP权限：

```
server.isOP(player);
```

## 获取命令管理器
你可以这样使用，来获取 [命令管理器](/Vanilla/Commands/ICommandManager)
```
server.commandManager;
```
