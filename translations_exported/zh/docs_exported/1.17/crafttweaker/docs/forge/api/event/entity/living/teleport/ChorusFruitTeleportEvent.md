# ChorusFruitTeleportEvent

ChorusFruitTeleportEvent is fired before a LivingEntity is teleported due to consuming Chorus Fruit.

The event is cancelable.

If the event is canceled, the teleport won't happen.

The event does not have a result.



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.teleport.ChorusFruitTeleportEvent;
```


## Extending EntityTeleportEvent

ChorusFruitTeleportEvent extends [EntityTeleportEvent](/forge/api/event/entity/living/teleport/EntityTeleportEvent). That means all methods available in [EntityTeleportEvent](/forge/api/event/entity/living/teleport/EntityTeleportEvent) are also available in ChorusFruitTeleportEvent

## 使用方式

:::group{name=getEntityLiving}

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)

```zenscript
// ChorusFruitTeleportEvent.getEntityLiving() as LivingEntity

myChorusFruitTeleportEvent.getEntityLiving();
```

:::


## 参数

| 名称           | 类型                                               | 可获得  | 可设置   | 描述                      |
| ------------ | ------------------------------------------------ | ---- | ----- | ----------------------- |
| entityLiving | [LivingEntity](/vanilla/api/entity/LivingEntity) | true | false | No Description Provided |

