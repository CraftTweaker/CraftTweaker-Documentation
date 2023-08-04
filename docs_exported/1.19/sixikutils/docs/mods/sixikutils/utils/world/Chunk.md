# Chunk

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.misc.world.Chunk;
```


## Methods

:::group{name=addEntityToStructure}



```zenscript
Chunk.addEntityToStructure(structure as Structure, time as long)
```

| Parameter |                        Type                         |       Description        |
|-----------|-----------------------------------------------------|--------------------------|
| structure | [Structure](/mods/sixikutils/utils/world/Structure) |                          |
| time      | long                                                | - time before appearance |


:::

:::group{name=fillBiomesFromNoise}

```zenscript
Chunk.fillBiomesFromNoise(biomeResolver as BiomeResolver, climateSampler as ClimateSampler)
```

|   Parameter    |                             Type                              |
|----------------|---------------------------------------------------------------|
| biomeResolver  | [BiomeResolver](/mods/sixikutils/utils/world/BiomeResolver)   |
| climateSampler | [ClimateSampler](/mods/sixikutils/utils/world/ClimateSampler) |


:::

:::group{name=getBelowZeroRetrogen}

Return Type: [BelowZeroRetrogen](/mods/sixikutils/utils/world/BelowZeroRetrogen)

```zenscript
// Chunk.getBelowZeroRetrogen() as BelowZeroRetrogen

myChunk.getBelowZeroRetrogen();
```

:::

:::group{name=getBlendingData}

Return Type: [BlendingData](/mods/sixikutils/utils/world/BlendingData)

```zenscript
// Chunk.getBlendingData() as BlendingData

myChunk.getBlendingData();
```

:::

:::group{name=getBlockEntitiesPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)[]

```zenscript
// Chunk.getBlockEntitiesPos() as BlockPos[]

myChunk.getBlockEntitiesPos();
```

:::

:::group{name=getPos}

Return Type: [ChunkPos](/mods/sixikutils/utils/world/ChunkPos)

```zenscript
// Chunk.getPos() as ChunkPos

myChunk.getPos();
```

:::

:::group{name=getWorldForge}

Return Type: [LevelAccessor](/mods/sixikutils/utils/world/LevelAccessor)

```zenscript
// Chunk.getWorldForge() as LevelAccessor

myChunk.getWorldForge();
```

:::


