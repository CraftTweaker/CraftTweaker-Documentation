# SpawnData

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.level.SpawnData;
```


## Extending Record

SpawnData extends Record. That means all methods available in Record are also available in SpawnData

## Methods

:::group{name=customSpawnRules}

Return Type: [Optional](/mods/sdmcrtplus/utils/core/Optional)

```zenscript
// SpawnData.customSpawnRules() as Optional

mySpawnData.customSpawnRules();
```

:::

:::group{name=entityToSpawn}

Return Type: [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag)

```zenscript
// SpawnData.entityToSpawn() as CompoundTag

mySpawnData.entityToSpawn();
```

:::

:::group{name=getCustomSpawnRules}

Return Type: [Optional](/mods/sdmcrtplus/utils/core/Optional)

```zenscript
// SpawnData.getCustomSpawnRules() as Optional

mySpawnData.getCustomSpawnRules();
```

:::

:::group{name=getEntityToSpawn}

Return Type: [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag)

```zenscript
// SpawnData.getEntityToSpawn() as CompoundTag

mySpawnData.getEntityToSpawn();
```

:::


