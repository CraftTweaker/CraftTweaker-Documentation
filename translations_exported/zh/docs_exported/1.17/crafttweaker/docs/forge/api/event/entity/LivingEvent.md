# LivingEvent

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.LivingEvent;
```


## Extending EntityEvent

LivingEvent extends [EntityEvent](/forge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/forge/api/event/entity/EntityEvent) are also available in LivingEvent

## 使用方式

:::group{name=getEntityLiving}

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)

```zenscript
// LivingEvent.getEntityLiving() as LivingEntity

myLivingEvent.getEntityLiving();
```

:::


## 参数

| 名称           | 类型                                               | 可获得  | 可设置   | 描述                      |
| ------------ | ------------------------------------------------ | ---- | ----- | ----------------------- |
| entityLiving | [LivingEntity](/vanilla/api/entity/LivingEntity) | true | false | No Description Provided |

