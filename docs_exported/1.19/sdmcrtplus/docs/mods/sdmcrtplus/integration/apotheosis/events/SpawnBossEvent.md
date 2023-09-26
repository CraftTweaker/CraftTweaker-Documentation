# SpawnBossEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.apotheosis.events.SpawnBossEvent;
```


## Extending LivingEvent

SpawnBossEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in SpawnBossEvent

## Methods

:::group{name=getPosSpawn}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// SpawnBossEvent.getPosSpawn() as BlockPos

mySpawnBossEvent.getPosSpawn();
```

:::

:::group{name=getTarget}

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)

```zenscript
// SpawnBossEvent.getTarget() as LivingEntity

mySpawnBossEvent.getTarget();
```

:::


