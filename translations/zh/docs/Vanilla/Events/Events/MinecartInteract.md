# MinecartInteract

MinecartInteractEvent is fired whenever a player begins to interact with a minecart. The event is **cancelable**, and doing so will prevent the container from being opened.

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.MinecartInteractEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
MinecartInteract Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IMinecartEvent](/Vanilla/Events/Events/IMinecartEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters

| ZenGetter | 返回值类型                                         |
| --------- | --------------------------------------------- |
| `播放器`     | [IPlayer](/Vanilla/Players/IPlayer/)          |
| `项目`      | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |
| `手`       | String                                        |
