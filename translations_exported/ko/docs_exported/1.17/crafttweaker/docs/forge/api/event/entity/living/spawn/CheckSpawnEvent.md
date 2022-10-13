# CheckSpawnEvent

Fires before mob spawn events.

 Result is significant: DEFAULT: use vanilla spawn rules ALLOW:   allow the spawn DENY:    deny the spawn

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.spawn.CheckSpawnEvent;
```


## Extending LivingSpawnEvent

CheckSpawnEvent extends [LivingSpawnEvent](/forge/api/event/entity/living/spawn/LivingSpawnEvent). That means all methods available in [LivingSpawnEvent](/forge/api/event/entity/living/spawn/LivingSpawnEvent) are also available in CheckSpawnEvent

## Methods

:::group{name=getSpawnReason}

Return Type: [MobSpawnType](/vanilla/api/entity/MobSpawnType)

```zenscript
// CheckSpawnEvent.getSpawnReason() as MobSpawnType

myCheckSpawnEvent.getSpawnReason();
```

:::

:::group{name=getSpawner}

Return Type: [BaseSpawner](/vanilla/api/world/BaseSpawner)

```zenscript
// CheckSpawnEvent.getSpawner() as BaseSpawner

myCheckSpawnEvent.getSpawner();
```

:::

:::group{name=isSpawner}

Return Type: boolean

```zenscript
// CheckSpawnEvent.isSpawner() as boolean

myCheckSpawnEvent.isSpawner();
```

:::


## Properties

| 이름          | Type                                             | Has Getter | Has Setter | Description             |
| ----------- | ------------------------------------------------ | ---------- | ---------- | ----------------------- |
| isSpawner   | boolean                                          | true       | false      | No Description Provided |
| spawnReason | [MobSpawnType](/vanilla/api/entity/MobSpawnType) | true       | false      | No Description Provided |
| spawner     | [BaseSpawner](/vanilla/api/world/BaseSpawner)    | true       | false      | No Description Provided |

