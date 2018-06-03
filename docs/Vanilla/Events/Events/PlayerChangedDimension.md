# 玩家改变维度（PlayerChangedDimensionEvent）

玩家改变维度事件会在[玩家](/Vanilla/Players/IPlayer)所在的[维度/世界](/Vanilla/World/IWorld)发生改变时触发。比如会在玩家进入/离开下界时触发。

## 事件类
你需要使用以下方式作为函数头以创建此类:
`crafttweaker.event.PlayerChangedDimensionEvent`
你当然可以先导入类然后再使用。


## Event interface extensions

玩家改变维度事件实现了如下接口，能够使用如下所有的 methods，getters 和 setters：

- [IPlayerEvent](IPlayerEvent)



## ZenGetters
可以从事件中检索以下信息:

| ZenGetter   | 返回类型                             |
|-------------|-----------------------------------------|
| `player`（玩家）| [IPlayer](/Vanilla/Players/IPlayer)     |
| `from`（原来）| int                                     |
| `fromWorld`（原来的世界）| [IWorld](/Vanilla/World/IWorld)         |
| `to`（到达）| int                                     |
| `toWorld`（到达的世界）| [IWorld](/Vanilla/World/IWorld)         |
