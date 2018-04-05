# 玩家使用骨粉

玩家使用骨粉事件在玩家对一个方块使用骨粉是触发。

## 事件类
你需要使用以下方式作为函数头以创建此类:  
`crafttweaker.event.PlayerBonemealEvent`  
你当然可以先[导入](/AdvancedFunctions/Import)类然后再使用。


## ZenGetters
可以从事件中检索以下信息:

| ZenGetter   | 返回类型                                   |
|-------------|-------------------------------------------|
| `canceled`（取消）| boolean                                   |
| `processed` （处理）| boolean                                   |
| `x`（方块的x轴坐标）| int                                       |
| `y`（方块的y轴坐标）| int                                       |
| `z`（方块的z轴坐标）| int                                       |
| `player`（玩家）    | [IPlayer](/Vanilla/Players/IPlayer)       |
| `world`（世界）     | [IWorld](/Vanilla/World/IWorld)           |
| `block`（方块）    | [IBlock](/Vanilla/Block/IBlock)           |
| `dimension`（维度） | int                                       |

## ZenMethods

- `event.cancel()` 将事件设置为取消。
- `event.process()` 将事件设置为处理。
