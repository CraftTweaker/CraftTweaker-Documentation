# BlockHarvestDropsEvent

每当一个方块即将丢弃它的物品时，BlockHarvestDrops 事件就会被发射。  
您可以修改方块列表以及总的丢弃机会。 如果您事先处理所有几率, 则将后者设为1。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.BlockHarvestDropsEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

BlockHarvestDros Events 实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter  | ZenSetter | 类型                                             |
| ---------- | --------- | ---------------------------------------------- |
| `播放器`      |           | [IPlayer](/Vanilla/Players/IPlayer/)           |
| `isPlayer` |           | bool                                           |
| `丝绸Touch`  |           | bool                                           |
| `幸运级别`     |           | 整数                                             |
| `掉落数`      | `掉落数`     | 列表<[IItemStack](/Vanilla/Items/IItemStack/)\> |
| `掉落机会`     | `掉落机会`    | 浮点数                                            |

## 添加项目到列表

您可以添加分配列表或使用方法将项目添加到列表中：

```zenscript
drops += <minecraft:coal>;
event.additem(<minecraft:coal>);
```