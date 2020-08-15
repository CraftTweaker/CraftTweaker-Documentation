# 玩家合成了

每当玩家制造东西时，玩家都会被发射。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerCraftedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

玩家制作的事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter    | 返回值类型                                                        |
| ------------ | ------------------------------------------------------------ |
| `播放器`        | [IPlayer](/Vanilla/Players/IPlayer/)                         |
| `output（输出）` | [IItemStack](/Vanilla/Items/IItemStack/)                     |
| `库存`         | [ICrafting库存](/Vanilla/Recipes/Crafting/ICraftingInventory/) |