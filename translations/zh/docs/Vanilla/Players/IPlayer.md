# IPlayer

IPlayer 接口允许您查看特定玩家的某些信息并与指定玩家交互。 大多用于事件处理器和配方函数。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweaper.player.IPlayer；`

## 扩展IEntityLivingBase和IUser

IPlayer extension [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/). 这意味着 [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) 对象也可用于 IPlayer Object。  
IPlayer 也扩展 [IUser](/Vanilla/Players/IUser/) 这意味着 [IUser](/Vanilla/Players/IUser/) 对象所有可用的函数也可供IPlayer Object使用。

## Zengetters

Zengetters用于检索信息。 通常要么分配给一个变量，要么在方法/函数中使用。

| Zengetter   | 功能                               | 返回值类型                                      | 用法         |
| ----------- | -------------------------------- | ------------------------------------------ | ---------- |
| uuid        | 返回玩家UID                          | 字符串                                        | `播放器.uuid` |
| 名称          | 返回玩家姓名                           | string                                     | `玩家名称`     |
| data        | 返回玩家的数据                          | [IData](/Vanilla/Data/IData/)              | `游戏数据`     |
| xp (经验值)    | 返回玩家的体验级别。 也可以用来设置玩家体验级别         | 整数                                         | `xp`       |
| 快捷栏大小       | 返回玩家的快捷栏大小                       | 整数                                         | `热栏大小`     |
| 背包大小        | 返回玩家的物品栏大小                       | 整数                                         | `背包大小`     |
| currentItem | 返回当前玩家正在持有的项目                    | [IItemStack](/Vanilla/Items/IItemStack/)   | `当前项目`     |
| 创造性的        | 返回如果玩家当前处于创造模式(a.k.a gamemode 1) | bool                                       | `有创意的`     |
| 冒险模式        | 返回如果玩家目前处于探险模式(a.k.a gamemode 2) | bool                                       | `冒险游戏`     |
| x           | 返回当前玩家在世界中的 X 位置                 | 双精度                                        | `x`        |
| 年           | 返回玩家在世界中当前的 y 位置                 | 双精度                                        | `y`        |
| z           | 返回当前玩家在世界中的 z 位置                 | 双精度                                        | `z 播放器`    |
| 位置          | 返回玩家当前的位置。 也可以用来设置玩家的位置          | [位置3f](/Vanilla/Utils/Position3f/)         | `播放器位置`    |
| foodStats   | 返回玩家的食物统计信息。                     | [IFoodStats](/Vanilla/Players/IFoodStats/) | `食物统计`     |

## ZenMethods

ZenMethods 是为了与其他东西做事，在这种情况下是与一名玩家做事。

| ZenMethod（ZenMethod）  | 参数类型(s)                                  | 功能                         | 例子                                      |
| --------------------- | ---------------------------------------- | -------------------------- | --------------------------------------- |
| 移除XP(XPtoRemove)      | int #整型                                  | 从玩家中移除给定的体验等级。             | `移除播放器 (1)`                             |
| 更新(IData)             | [IData](/Vanilla/Data/IData/)            | 更新玩家数据到提供的 IData。          |                                         |
| 发送聊天(Message)         | 字符串或 IChatMessage                        | 给玩家发送一条聊天消息。               | `播放器.SendChat("您好，我的老朋友")`              |
| getHotbarStack(索引)    | 整数                                       | 在玩家热键中返回给定索引处的项目。          | `播放器.getHotbarStack(3)`                 |
| getInventoryStack(索引) | 整数                                       | 返回玩家背包中给定索引处的项目。           | `player.getInventoryStack(3)`           |
| 赠送(项目)                | [IItemStack](/Vanilla/Items/IItemStack/) | 给玩家提供物品。 物品是一个 IItemStack。 | `玩家.give(<minecraft:gold_ingot>)` |
| 传送(位置)                | [位置3f](/Vanilla/Utils/Position3f/)       | 将玩家传送到同一维度中提供的位置           | `Player.telport(位置)`                    |
| 执行命令(下级)              | 字符串                                      | 以玩家身份执行命令                  | `player.executeCommand("杀")`            |
| droptem(dropAll)      | 布尔值                                      | 丢弃当前玩家持有的项目 (或整个堆栈)。       | `投放项目 (false)`                          |
| 投放项目 (itemtoDrop)     | [IItemStack](/Vanilla/Items/IItemStack/) | 将提供的物品拖放到玩家的位置。            | `拖放项目(<minecraft:dirt>)`          |