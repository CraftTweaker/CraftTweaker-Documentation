# IServer

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweaper.IServer;`

## 扩展 ICommander

IServer extension [ICommandSender](/Vanilla/Commands/ICommandSender), 所以对于一个 [ICommandSender](/Vanilla/Commands/ICommandSender) 对象所有可用的方法也可以用于 IServer 对象。

## 访问服务器处理程序

您可以使用 `服务器` [全局关键字](/Vanilla/Global_Functions/)访问服务器处理程序。  
或者，您可以从任意 [ICommandSender](/Vanilla/Commands/ICommandSender/) 获取服务器。

## 检查 [玩家](/Vanilla/Players/IPlayer/) 是否是OP

您可以使用它来检查一个 [IPlayer](/Vanilla/Players/IPlayer/) 是否拥有OP 权限：

```zenscript
server.isOP(玩家)；
```

## 获取命令管理器

您可以使用它来获取 [ICommandManager](/Vanilla/Commands/ICommandManager/)

```zenscript
server.commander;
```