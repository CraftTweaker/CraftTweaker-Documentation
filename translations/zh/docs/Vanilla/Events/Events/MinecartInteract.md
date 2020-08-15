# MinecartInteract

每当玩家开始与地雷交互时，就会发射Minecart事件。 事件是 **可取消**, 这样做将防止容器被打开.

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.MinecartInteractEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
MinecartInteract 事件实现了以下接口，并且能够调用他们所有的方法/getter/setters：

- [Imminecart事件](/Vanilla/Events/Events/IMinecartEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters

| ZenGetter | 返回值类型                                         |
| --------- | --------------------------------------------- |
| `播放器`     | [IPlayer](/Vanilla/Players/IPlayer/)          |
| `项目`      | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |
| `手`       | String                                        |
