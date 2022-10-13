# MCItemSmeltedEvent

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.MCItemSmeltedEvent;
```


## Extending MCPlayerEvent

MCItemSmeltedEvent extends [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent). That means all methods available in [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent) are also available in MCItemSmeltedEvent

## 使用方式

:::group{name=getSmelted}

Gets the smelted item (the output stack)

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// MCItemSmeltedEvent.getSmelted() as IItemStack

myMCItemSmeltedEvent.getSmelted();
```

:::


## 参数

| 名称      | 类型                                          | 可获得  | 可设置   | 描述                                       |
| ------- | ------------------------------------------- | ---- | ----- | ---------------------------------------- |
| smelted | [IItemstack](/vanilla/api/items/IItemStack) | true | false | Gets the smelted item (the output stack) |

