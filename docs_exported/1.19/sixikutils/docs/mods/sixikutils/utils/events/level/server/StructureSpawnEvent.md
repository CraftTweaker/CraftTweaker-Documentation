# StructureSpawnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.crafttweakerutils.api.events.world.level.StructureSpawnEvent;
```


## Extending LevelEvent

StructureSpawnEvent extends [LevelEvent](/mods/sixikutils/utils/events/level/server/LevelEvent). That means all methods available in [LevelEvent](/mods/sixikutils/utils/events/level/server/LevelEvent) are also available in StructureSpawnEvent

## Methods

:::group{name=getChunkAccess}

Return Type: [Chunk](/mods/sixikutils/utils/world/Chunk)

```zenscript
// StructureSpawnEvent.getChunkAccess() as Chunk

myStructureSpawnEvent.getChunkAccess();
```

:::

:::group{name=getChunkPos}

Return Type: [ChunkPos](/mods/sixikutils/utils/world/ChunkPos)

```zenscript
// StructureSpawnEvent.getChunkPos() as ChunkPos

myStructureSpawnEvent.getChunkPos();
```

:::

:::group{name=getLevel}

Return Type: [LevelAccessor](/mods/sixikutils/utils/world/LevelAccessor)

```zenscript
// StructureSpawnEvent.getLevel() as LevelAccessor

myStructureSpawnEvent.getLevel();
```

:::

:::group{name=getRandomState}

Return Type: [RandomState](/mods/sixikutils/utils/world/RandomState)

```zenscript
// StructureSpawnEvent.getRandomState() as RandomState

myStructureSpawnEvent.getRandomState();
```

:::

:::group{name=getSectionPos}

Return Type: [SectionPos](/mods/sixikutils/utils/world/SectionPos)

```zenscript
// StructureSpawnEvent.getSectionPos() as SectionPos

myStructureSpawnEvent.getSectionPos();
```

:::

:::group{name=getStructureManager}

Return Type: [StructureManager](/mods/sixikutils/utils/world/StructureManager)

```zenscript
// StructureSpawnEvent.getStructureManager() as StructureManager

myStructureSpawnEvent.getStructureManager();
```

:::

:::group{name=getTemplateManager}

Return Type: [StructureTemplateManager](/mods/sixikutils/utils/world/StructureTemplateManager)

```zenscript
// StructureSpawnEvent.getTemplateManager() as StructureTemplateManager

myStructureSpawnEvent.getTemplateManager();
```

:::


## Properties

|       Name       |                                       Type                                        | Has Getter | Has Setter |
|------------------|-----------------------------------------------------------------------------------|------------|------------|
| chunkAccess      | [Chunk](/mods/sixikutils/utils/world/Chunk)                                       | true       | false      |
| chunkPos         | [ChunkPos](/mods/sixikutils/utils/world/ChunkPos)                                 | true       | false      |
| levelAccessor    | [LevelAccessor](/mods/sixikutils/utils/world/LevelAccessor)                       | true       | false      |
| randomState      | [RandomState](/mods/sixikutils/utils/world/RandomState)                           | true       | false      |
| sectionPos       | [SectionPos](/mods/sixikutils/utils/world/SectionPos)                             | true       | false      |
| structureManager | [StructureManager](/mods/sixikutils/utils/world/StructureManager)                 | true       | false      |
| templateManager  | [StructureTemplateManager](/mods/sixikutils/utils/world/StructureTemplateManager) | true       | false      |

