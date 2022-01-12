# LivingSpawnEvent

LivingSpawnEvent is fired when an event involving any spawning or despawning of an Entity occurs.

 This event is fired for all types of spawning or despawning mechanics, it is generally advised to use the specific teleport events to target a specific mechanic instead of this event.

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.spawn.LivingSpawnEvent;
```


## Extending LivingEvent

LivingSpawnEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingSpawnEvent

## 参数

| 名称    | 类型                                | 可获得  | 可设置   | 描述                      |
| ----- | --------------------------------- | ---- | ----- | ----------------------- |
| world | [Level](/vanilla/api/world/Level) | true | false | No Description Provided |
| x     | 双精度                               | true | false | No Description Provided |
| y     | 双精度                               | true | false | No Description Provided |
| z     | 双精度                               | true | false | No Description Provided |

