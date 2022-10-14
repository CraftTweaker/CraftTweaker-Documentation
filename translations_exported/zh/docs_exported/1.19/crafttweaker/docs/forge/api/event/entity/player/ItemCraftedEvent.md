# ItemCraftedEvent

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.player.ItemCraftedEvent;
```


## Extending PlayerEvent

ItemCraftedEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in ItemCraftedEvent

## 使用方式

:::group{name=getCrafting}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// ItemCraftedEvent.getCrafting() as IItemStack

myItemCraftedEvent.getCrafting();
```

:::

:::group{name=getCraftingMatrix}

Return Type: [Container](/vanilla/api/world/Container)

```zenscript
// ItemCraftedEvent.getCraftingMatrix() as Container

myItemCraftedEvent.getCraftingMatrix();
```

:::


## 参数

| 名称        | 类型                                         | 可获得  | 可设置   |
| --------- | ------------------------------------------ | ---- | ----- |
| crafting  | [IItemstack](/vanilla/api/item/IItemStack) | true | false |
| inventory | [Container](/vanilla/api/world/Container)  | true | false |

