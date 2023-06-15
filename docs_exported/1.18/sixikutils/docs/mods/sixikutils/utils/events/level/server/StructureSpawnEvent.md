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

Return Type: **invalid**

```zenscript
// StructureSpawnEvent.getChunkPos() as invalid

myStructureSpawnEvent.getChunkPos();
```

:::

:::group{name=getL}

Return Type: long

```zenscript
// StructureSpawnEvent.getL() as long

myStructureSpawnEvent.getL();
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

Return Type: **invalid**

```zenscript
// StructureSpawnEvent.getRandomState() as invalid

myStructureSpawnEvent.getRandomState();
```

:::

:::group{name=getSectionPos}

Return Type: **invalid**

```zenscript
// StructureSpawnEvent.getSectionPos() as invalid

myStructureSpawnEvent.getSectionPos();
```

:::

:::group{name=getStructureManager}

Return Type: **invalid**

```zenscript
// StructureSpawnEvent.getStructureManager() as invalid

myStructureSpawnEvent.getStructureManager();
```

:::

:::group{name=getTemplateManager}

Return Type: [StructureManager](/mods/sixikutils/utils/world/StructureManager)

```zenscript
// StructureSpawnEvent.getTemplateManager() as StructureManager

myStructureSpawnEvent.getTemplateManager();
```

:::


## Properties

|       Name       |                               Type                                | Has Getter | Has Setter |
|------------------|-------------------------------------------------------------------|------------|------------|
| chunkAccess      | [Chunk](/mods/sixikutils/utils/world/Chunk)                       | true       | false      |
| chunkPos         | **invalid**                                                       | true       | false      |
| l                | long                                                              | true       | false      |
| levelAccessor    | [LevelAccessor](/mods/sixikutils/utils/world/LevelAccessor)       | true       | false      |
| randomState      | **invalid**                                                       | true       | false      |
| sectionPos       | **invalid**                                                       | true       | false      |
| structureManager | **invalid**                                                       | true       | false      |
| templateManager  | [StructureManager](/mods/sixikutils/utils/world/StructureManager) | true       | false      |

