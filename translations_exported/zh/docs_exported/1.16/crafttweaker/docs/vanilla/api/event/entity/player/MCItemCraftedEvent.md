# MCItemCraftedEvent

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.player.MCItemCraftedEvent;
```


## Extending MCPlayerEvent

MCItemCraftedEvent extends [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent). That means all methods available in [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent) are also available in MCItemCraftedEvent

## 使用方式

:::group{name=getCrafting}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// MCItemCraftedEvent.getCrafting() as IItemStack

myMCItemCraftedEvent.getCrafting();
```

:::

:::group{name=getCraftingMatrix}

Return Type: [IInventory](/vanilla/api/inventory/IInventory)

```zenscript
// MCItemCraftedEvent.getCraftingMatrix() as IInventory

myMCItemCraftedEvent.getCraftingMatrix();
```

:::


## 参数

| 名称             | 类型                                              | 可获得  | 可设置   | 描述                      |
| -------------- | ----------------------------------------------- | ---- | ----- | ----------------------- |
| crafting       | [IItemstack](/vanilla/api/items/IItemStack)     | true | false | No Description Provided |
| craftingMatrix | [IInventory](/vanilla/api/inventory/IInventory) | true | false | No Description Provided |

