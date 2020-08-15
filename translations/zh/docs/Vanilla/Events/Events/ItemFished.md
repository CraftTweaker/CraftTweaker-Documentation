# 物品捕获事件

当玩家要捕鱼时，这个事件会被射击。 取消该事件将阻止玩家接收物品，但绳子仍会造成伤害。

## 注

额外伤害可以通过设置 `事件。额外伤害`。 将要放大的 IItemStacks 列表(它是 **不可修改**)包含在 `event.drops` 中。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ItemFishedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
物品处理事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters
以下信息可以在事件中检索/设置：

| ZenGetter | ZenSetter | 类型                                         |
| --------- | --------- | ------------------------------------------ |
| `伤害`      |           | 整数                                         |
|           | `额外伤害`    | int                                        |
| `掉落数`     |           | [IItemStack](/Vanilla/Items/IItemStack/)[] |
