# MCItemTossEvent

Event that is fired whenever a player tosses (Q) an item or drag-n-drops a stack of items outside the inventory GUI screens.

The event is cancelable.

If the event is canceled, will stop the items from entering the world, but will not prevent them being removed from the inventory - and thus removed from the system.

The event does not have a result.



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.item.MCItemTossEvent;
```


## Extending MCItemEvent

MCItemTossEvent extends [MCItemEvent](/vanilla/api/event/entity/MCItemEvent). That means all methods available in [MCItemEvent](/vanilla/api/event/entity/MCItemEvent) are also available in MCItemTossEvent

## 参数

| 名称     | 类型                                                           | 可获得  | 可设置   | 描述                      |
| ------ | ------------------------------------------------------------ | ---- | ----- | ----------------------- |
| player | [MCPlayerEntity #MC玩家实体](/vanilla/api/entity/MCPlayerEntity) | true | false | No Description Provided |

