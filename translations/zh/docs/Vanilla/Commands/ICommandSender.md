# ICommander

ICommandSender 接口使用了每个实体的基础以及CraftTweiler中的一些其他类型。  
每一个 [IEnty](/Vanilla/Entities/IEntity/) 和 [IPlayer](/Vanilla/Players/IPlayer/) 实现这一点！

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweaper.command.ICommander Sender；`

## ZenGetter

| ZenGetter | 返回值类型                                  |
| --------- | -------------------------------------- |
| 显示名称      | string                                 |
| 位置        | [IBlockPos](/Vanilla/World/IBlockPos/) |
| 世界        | [IWorld](/Vanilla/World/IWorld/)       |
| 服务器       | [IServer](/Vanilla/Game/IServer/)      |

## ZenMethods

#### 发送消息

需要一个字符串。 返回无效(无)。

```zenscript
Sender.sendMessage(文本)；
```