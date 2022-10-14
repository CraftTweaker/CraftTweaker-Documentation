# ItemEvent

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.ItemEvent;
```


## Extending EntityEvent

ItemEvent extends [EntityEvent](/forge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/forge/api/event/entity/EntityEvent) are also available in ItemEvent

## 参数

| 名称         | 类型                                                     | 可获得  | 可设置   |
| ---------- | ------------------------------------------------------ | ---- | ----- |
| entityItem | [ItemEntity](/vanilla/api/entity/type/item/ItemEntity) | true | false |

