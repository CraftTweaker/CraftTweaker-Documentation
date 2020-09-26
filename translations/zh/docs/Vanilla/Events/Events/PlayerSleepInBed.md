# 玩家睡眠

当玩家睡觉时，玩家会被发射。 此事件可以通过设置 `结果` 来控制玩家是否能够睡觉。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSleepInBedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerSleepInBed 事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

* [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
* [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## 结果类型

* NOT_POSSIBLE_HERE 
* NOT_POSSIBLE_NOW 
* NOT_SAFE 
* 好的 
* OTHER_PROBLEM 
* TOO_FOR_AWAY 

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter | 返回值类型                                |
| --------- | ------------------------------------ |
| `x`       | 整数                                   |
| `年`       | 整数                                   |
| `z`       | 整数                                   |
| `播放器`     | [IPlayer](/Vanilla/Players/IPlayer/) |
| `结果`      | 字符串 (上面可能的值)                         |

## ZenSetter

以下可以在事件中设置：

| ZenSetter | 参数类型         |
| --------- | ------------ |
| `结果`      | 字符串 (上面可能的值) |