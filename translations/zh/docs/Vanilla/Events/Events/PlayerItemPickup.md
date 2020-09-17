# 玩家物品拾取

当玩家与实体物品进行互动并且一个物品或物品的数量已经被拿起，玩家物品就会被发射。 此事件发生在 [PlayerPickupits](/Vanilla/Events/Events/PlayerPickupItem/) 被发射之后。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerItemPickupEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
PlayerItemPickup 事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters
以下信息可以从事件中检索：

| ZenGetter | 返回值类型                                         |
| --------- | --------------------------------------------- |
| `堆栈复制`    | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |
| `原始实体`    | [IEntityItem](/Vanilla/Entities/IEntityItem/) |

## 注

`堆栈复制` 是一个包含在原实体项内的项目的副本。 代表被抓到并放入玩家背包的东西。 `原始实体` 是拥有物品堆栈剩余数量的物品实体(如果玩家没有提取全部数量)。
