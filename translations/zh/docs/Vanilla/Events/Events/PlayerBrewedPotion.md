# 玩家酿酒药水

当玩家从酿造台拿出药水时，玩家会被发射。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerBrewedPotionEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

玩家酿酒活动实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter | 返回值类型                                    |
| --------- | ---------------------------------------- |
| `播放器`     | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `药水`      | [IItemStack](/Vanilla/Items/IItemStack/) |
| `手`       | 字符串                                      |