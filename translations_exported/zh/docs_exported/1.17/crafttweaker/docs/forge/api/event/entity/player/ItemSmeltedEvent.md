# ItemSmeltedEvent

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.ItemSmeltedEvent;
```


## Extending PlayerEvent

ItemSmeltedEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in ItemSmeltedEvent

## 使用方式

:::group{name=getSmelted}

Gets the smelted item (the output stack)

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// ItemSmeltedEvent.getSmelted() as IItemStack

myItemSmeltedEvent.getSmelted();
```

:::


## 参数

| 名称      | 类型                                         | 可获得  | 可设置   | 描述                                       |
| ------- | ------------------------------------------ | ---- | ----- | ---------------------------------------- |
| smelted | [IItemstack](/vanilla/api/item/IItemStack) | true | false | Gets the smelted item (the output stack) |

