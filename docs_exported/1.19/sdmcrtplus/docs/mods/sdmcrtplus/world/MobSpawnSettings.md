# MobSpawnSettings

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.MobSpawnSettings;
```


## Methods

:::group{name=getCreatureProbability}

Return Type: float

```zenscript
// MobSpawnSettings.getCreatureProbability() as float

myMobSpawnSettings.getCreatureProbability();
```

:::

:::group{name=getCreatureProbability}

Return Type: [MobSpawnCost](/mods/sdmcrtplus/world/MobSpawnCost)

```zenscript
MobSpawnSettings.getCreatureProbability(entityType as EntityType) as MobSpawnCost
```

| Parameter  |                     Type                     |
|------------|----------------------------------------------|
| entityType | [EntityType](/vanilla/api/entity/EntityType) |


:::

:::group{name=getEntityTypes}

Return Type: Set&lt;[EntityType](/vanilla/api/entity/EntityType)&gt;

```zenscript
// MobSpawnSettings.getEntityTypes() as Set<EntityType>

myMobSpawnSettings.getEntityTypes();
```

:::

:::group{name=getMobs}

Return Type: [WeightedRandomList](/mods/sdmcrtplus/utils/random/WeightedRandomList)&lt;[SpawnerData](/mods/sdmcrtplus/world/SpawnerData)&gt;

```zenscript
MobSpawnSettings.getMobs(mobCategory as MobCategory) as WeightedRandomList<SpawnerData>
```

|  Parameter  |                      Type                      |
|-------------|------------------------------------------------|
| mobCategory | [MobCategory](/vanilla/api/entity/MobCategory) |


:::

:::group{name=getSpawnerTypes}

Return Type: Set&lt;[MobCategory](/vanilla/api/entity/MobCategory)&gt;

```zenscript
// MobSpawnSettings.getSpawnerTypes() as Set<MobCategory>

myMobSpawnSettings.getSpawnerTypes();
```

:::


