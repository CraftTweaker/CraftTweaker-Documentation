# EntityEvent

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.EntityEvent;
```


## Extending Event

EntityEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in EntityEvent

## 使用方式

:::group{name=getEntity}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// EntityEvent.getEntity() as Entity

myEntityEvent.getEntity();
```

:::


## 参数

| 名称     | 类型                                   | 可获得  | 可设置   | 描述                      |
| ------ | ------------------------------------ | ---- | ----- | ----------------------- |
| entity | [Entity](/vanilla/api/entity/Entity) | true | false | No Description Provided |

