# SpecialSpawnEvent

SpecialSpawn is fired when an Entity is to be spawned.

The event is not cancelable.

The event does not have a result.



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.spawn.SpecialSpawnEvent;
```


## Extending LivingSpawnEvent

SpecialSpawnEvent extends [LivingSpawnEvent](/forge/api/event/entity/living/spawn/LivingSpawnEvent). That means all methods available in [LivingSpawnEvent](/forge/api/event/entity/living/spawn/LivingSpawnEvent) are also available in SpecialSpawnEvent

## 使用方式

:::group{name=getSpawnReason}

Return Type: [MobSpawnType](/vanilla/api/entity/MobSpawnType)

```zenscript
// SpecialSpawnEvent.getSpawnReason() as MobSpawnType

mySpecialSpawnEvent.getSpawnReason();
```

:::

:::group{name=getSpawner}

Return Type: [BaseSpawner](/vanilla/api/world/BaseSpawner)

```zenscript
// SpecialSpawnEvent.getSpawner() as BaseSpawner

mySpecialSpawnEvent.getSpawner();
```

:::


## 参数

| 名称          | 类型                                               | 可获得  | 可设置   | 描述                      |
| ----------- | ------------------------------------------------ | ---- | ----- | ----------------------- |
| spawnReason | [MobSpawnType](/vanilla/api/entity/MobSpawnType) | true | false | No Description Provided |
| spawner     | [BaseSpawner](/vanilla/api/world/BaseSpawner)    | true | false | No Description Provided |

