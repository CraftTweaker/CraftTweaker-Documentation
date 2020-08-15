# ItemFishedEvent

This event is fired to when a player is about to fish up an item. Cancelling the event will prevent the player from receiving an item, but the rod will still take damage.

## 注

Additional damage can be done to the rod by setting `event.additionalDamage`. A list of IItemStacks (which is **not modifiable**) that are going to be fished up is contained within `event.drops`.

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ItemFishedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
ItemFished Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters
以下信息可以在事件中检索/设置：

| ZenGetter | ZenSetter          | 类型                                         |
| --------- | ------------------ | ------------------------------------------ |
| `伤害`      |                    | 整数                                         |
|           | `additionalDamage` | int                                        |
| `掉落数`     |                    | [IItemStack](/Vanilla/Items/IItemStack/)[] |
