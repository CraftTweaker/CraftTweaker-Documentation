# Chunk

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.crafttweakerutils.api.misc.world.Chunk;
```


## Methods

:::group{name=addEntity}

```zenscript
Chunk.addEntity(entity as Entity)
```

| Parameter |                      Type                      |
|-----------|------------------------------------------------|
| entity    | [Entity](/mods/sixikutils/utils/entity/Entity) |


:::

:::group{name=addEntity}

```zenscript
Chunk.addEntity(structure as invalid, lg as long)
```

| Parameter |    Type     |
|-----------|-------------|
| structure | **invalid** |
| lg        | long        |


:::

:::group{name=fillBiomesFromNoise}

```zenscript
Chunk.fillBiomesFromNoise(biomeResolver as invalid, climateSampler as invalid)
```

|   Parameter    |    Type     |
|----------------|-------------|
| biomeResolver  | **invalid** |
| climateSampler | **invalid** |


:::

:::group{name=getBelowZeroRetrogen}

Return Type: **invalid**

```zenscript
// Chunk.getBelowZeroRetrogen() as invalid

myChunk.getBelowZeroRetrogen();
```

:::

:::group{name=getBlendingData}

Return Type: **invalid**

```zenscript
// Chunk.getBlendingData() as invalid

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

Return Type: **invalid**

```zenscript
// Chunk.getPos() as invalid

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


