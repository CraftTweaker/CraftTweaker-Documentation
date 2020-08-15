# 玩家变更尺寸

每当 [玩家的](/Vanilla/Players/IPlayer/) [维度/世界](/Vanilla/World/IWorld/) 发生变化时，播放器变更尺寸活动会被触发，例如，进入/离开天体时。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerChangedDimensionEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerChangedDimension Events实现以下接口，并且能够调用他们的所有方法/getter/setter：

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter | 返回值类型                                |
| --------- | ------------------------------------ |
| `播放器`     | [IPlayer](/Vanilla/Players/IPlayer/) |
| `来自`      | 整数                                   |
| `来自世界`    | [IWorld](/Vanilla/World/IWorld/)     |
| `到`       | 整数                                   |
| `toWorld` | [IWorld](/Vanilla/World/IWorld/)     |