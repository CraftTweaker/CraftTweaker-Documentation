# MCEntityEvent

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.MCEntityEvent;
```


## Extending MCEvent

MCEntityEvent extends [MCEvent](/vanilla/api/event/MCEvent). That means all methods available in [MCEvent](/vanilla/api/event/MCEvent) are also available in MCEntityEvent

## 使用方式

:::group{name=getEntity}

Return Type: [MCEntity](/vanilla/api/entity/MCEntity)

```zenscript
// MCEntityEvent.getEntity() as MCEntity

myMCEntityEvent.getEntity();
```

:::


## 参数

| 名称     | 类型                                       | 可获得  | 可设置   | 描述                      |
| ------ | ---------------------------------------- | ---- | ----- | ----------------------- |
| entity | [MCEntity](/vanilla/api/entity/MCEntity) | true | false | No Description Provided |

