# EntityStruckByLightningEvent



The event is cancelable.

If the event is canceled, the entity is not struck by the lightening.

The event does not have a result.



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.EntityStruckByLightningEvent;
```


## Extending EntityEvent

EntityStruckByLightningEvent extends [EntityEvent](/forge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/forge/api/event/entity/EntityEvent) are also available in EntityStruckByLightningEvent

## 使用方式

:::group{name=getLightning}

Return Type: [LightningBolt](/vanilla/api/entity/type/misc/LightningBolt)

```zenscript
// EntityStruckByLightningEvent.getLightning() as LightningBolt

myEntityStruckByLightningEvent.getLightning();
```

:::


## 参数

| 名称        | 类型                                                           | 可获得  | 可设置   | 描述                      |
| --------- | ------------------------------------------------------------ | ---- | ----- | ----------------------- |
| lightning | [LightningBolt](/vanilla/api/entity/type/misc/LightningBolt) | true | false | No Description Provided |

