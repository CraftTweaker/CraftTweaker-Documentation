# 播放器设置生成

每当玩家生成位置改变时，播放器SetSpawn 事件都会被发射。  
它可以被取消以防止进一步处理。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSetSpawnEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerSetwn Events 实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter | 返回值类型                                  |
| --------- | -------------------------------------- |
| `播放器`     | [IPlayer](/Vanilla/Players/IPlayer/)   |
| `强制使用`    | 布尔值                                    |
| `生成新的`    | [IBlockPos](/Vanilla/World/IBlockPos/) |