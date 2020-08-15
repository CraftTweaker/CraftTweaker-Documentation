# 玩家重生

每当玩家重生时，玩家都会被射击。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerRespawnEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerRespawn 事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter        | 返回值类型                                |
| ---------------- | ------------------------------------ |
| `播放器`            | [IPlayer](/Vanilla/Players/IPlayer/) |
| `isEndConquered` | 布尔(如果重生因为端口而状态)                      |