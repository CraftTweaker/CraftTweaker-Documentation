# 命令发送者（ICommandSender）

命令发送者接口是实体的基础类型，也是其他 Crafttweaker 基础类型。 
每一个 [IEntity](/Vanilla/Entities/IEntity) 和 [IPlayer](/Vanilla/Players/IPlayer) 都可以继承这个接口！

## 导入包
如遇任何问题 (如声明 [数组](/AdvancedFunctions/Arrays_and_Loops))， 可以尝试通过导入相关包来解决。  
`import crafttweaker.commands.ICommandSender;`

## ZenGetter

| ZenGetter |               返回类型                |
| :-------: | :-----------------------------------: |
| 显示名称  |                字符串                 |
|   坐标    | [IBlockPos](/Vanilla/World/IBlockPos) |
|   世界    |    [IWorld](/Vanilla/World/IWorld)    |
|  服务器   |   [IServer](/Vanilla/Game/IServer)    |


## ZenMethods
#### 发送消息
接受字符串。
返回void（空）。

```
sender.sendMessage(String text);
```
