# 玩家睡眠

当玩家睡觉时，玩家会被发射。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSleepInBedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerSleepInBed 事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter | 返回值类型                                |
| --------- | ------------------------------------ |
| `x`       | 整数                                   |
| `年`       | 整数                                   |
| `z`       | 整数                                   |
| `播放器`     | [IPlayer](/Vanilla/Players/IPlayer/) |