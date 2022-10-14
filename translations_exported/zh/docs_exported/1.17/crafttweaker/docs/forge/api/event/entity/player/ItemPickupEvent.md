# ItemPickupEvent

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.ItemPickupEvent;
```


## Extending PlayerEvent

ItemPickupEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in ItemPickupEvent

## 使用方式

:::group{name=getOriginalEntity}

Return Type: [ItemEntity](/vanilla/api/entity/type/item/ItemEntity)

```zenscript
// ItemPickupEvent.getOriginalEntity() as ItemEntity

myItemPickupEvent.getOriginalEntity();
```

:::

:::group{name=getStack}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// ItemPickupEvent.getStack() as IItemStack

myItemPickupEvent.getStack();
```

:::


## 参数

| 名称             | 类型                                                     | 可获得  | 可设置   | 描述                      |
| -------------- | ------------------------------------------------------ | ---- | ----- | ----------------------- |
| originalEntity | [ItemEntity](/vanilla/api/entity/type/item/ItemEntity) | true | false | No Description Provided |
| 堆叠             | [IItemstack](/vanilla/api/item/IItemStack)             | true | false | No Description Provided |

