# Structure

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.level.levelgen.structure.Structure;
```


## Methods

:::group{name=adjustBoundingBox}

Return Type: [BoundingBox](/mods/sdmcrtplus/world/level/levelgen/structure/BoundingBox)

```zenscript
Structure.adjustBoundingBox(box as BoundingBox) as BoundingBox
```

| Parameter |                                    Type                                    |
|-----------|----------------------------------------------------------------------------|
| box       | [BoundingBox](/mods/sdmcrtplus/world/level/levelgen/structure/BoundingBox) |


:::

:::group{name=generate}

Return Type: [StructureStart](/mods/sdmcrtplus/world/level/levelgen/structure/StructureStart)

```zenscript
Structure.generate(registryAccess as invalid, chunkGenerator as invalid, biomeSource as invalid, randomState as invalid, structureTemplateManager as StructureTemplateManager, l as long, chunkPos as ChunkPos, i as int, levelHeightAccessor as LevelHeightAccessor, holderPredicate as Predicate<Holder<Biome>>) as StructureStart
```

|        Parameter         |                                                                         Type                                                                          |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| registryAccess           | **invalid**                                                                                                                                           |
| chunkGenerator           | **invalid**                                                                                                                                           |
| biomeSource              | **invalid**                                                                                                                                           |
| randomState              | **invalid**                                                                                                                                           |
| structureTemplateManager | [StructureTemplateManager](/mods/sdmcrtplus/world/level/levelgen/structure/templatesystem/StructureTemplateManager)                                   |
| l                        | long                                                                                                                                                  |
| chunkPos                 | [ChunkPos](/mods/sdmcrtplus/world/level/ChunkPos)                                                                                                     |
| i                        | int                                                                                                                                                   |
| levelHeightAccessor      | [LevelHeightAccessor](/mods/sdmcrtplus/world/level/LevelHeightAccessor)                                                                               |
| holderPredicate          | [Predicate](/mods/sdmcrtplus/utils/core/Predicate)&lt;[Holder](/mods/sdmcrtplus/utils/core/Holder)&lt;[Biome](/vanilla/api/world/biome/Biome)&gt;&gt; |


:::

:::group{name=getBiomes}

Return Type: stdlib.List&lt;[Biome](/vanilla/api/world/biome/Biome)&gt;

```zenscript
// Structure.getBiomes() as stdlib.List<Biome>

myStructure.getBiomes();
```

:::

:::group{name=getModifiableStructureInfo}

Return Type: [ModifiableStructureInfo](/mods/sdmcrtplus/world/level/ModifiableStructureInfo)

```zenscript
// Structure.getModifiableStructureInfo() as ModifiableStructureInfo

myStructure.getModifiableStructureInfo();
```

:::

:::group{name=getModifiedStructureSettings}

Return Type: [StructureSettings](/mods/sdmcrtplus/world/level/levelgen/structure/StructureSettings)

```zenscript
// Structure.getModifiedStructureSettings() as StructureSettings

myStructure.getModifiedStructureSettings();
```

:::

:::group{name=getRegistryName}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// Structure.getRegistryName() as ResourceLocation

myStructure.getRegistryName();
```

:::

:::group{name=getSpawnOverrides}

Return Type: [StructureSpawnOverride](/mods/sdmcrtplus/world/level/levelgen/structure/StructureSpawnOverride)[[MobCategory](/vanilla/api/entity/MobCategory)]

```zenscript
// Structure.getSpawnOverrides() as StructureSpawnOverride[MobCategory]

myStructure.getSpawnOverrides();
```

:::

:::group{name=step}

Return Type: **invalid**

```zenscript
// Structure.step() as invalid

myStructure.step();
```

:::

:::group{name=type}

Return Type: [StructureType](/mods/sdmcrtplus/world/level/levelgen/structure/StructureType)

```zenscript
// Structure.type() as StructureType

myStructure.type();
```

:::


## Properties

|     Name     |                            Type                            | Has Getter | Has Setter |
|--------------|------------------------------------------------------------|------------|------------|
| biomes       | stdlib.List&lt;[Biome](/vanilla/api/world/biome/Biome)&gt; | true       | false      |
| registryName | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |

