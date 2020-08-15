# PlayerAnvil维修

每当玩家在魔鬼中制造某种东西时，玩家都会遭到射击。  
你可以改变恶魔受损的机会。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerAnvilRepairEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerAnvil维修事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter    | ZenSetter | 返回值类型                                    |
| ------------ | --------- | ---------------------------------------- |
| `播放器`        |           | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `itemInput`  |           | [IItemStack](/Vanilla/Items/IItemStack/) |
| `项目属性`       |           | [IItemStack](/Vanilla/Items/IItemStack/) |
| `itenResult` |           | [IItemStack](/Vanilla/Items/IItemStack/) |
| `断裂概率`       | `断裂概率`    | 浮点数                                      |