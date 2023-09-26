# StructureSpawnEvent

The event can be canceled

 An event is called every time a structure tries to appear in the world.

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.events.level.generation.StructureSpawnEvent;
```


## Extending Event

StructureSpawnEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in StructureSpawnEvent

## Methods

:::group{name=getChunkpos}

Return Type: [ChunkPos](/mods/sdmcrtplus/world/level/ChunkPos)

```zenscript
// StructureSpawnEvent.getChunkpos() as ChunkPos

myStructureSpawnEvent.getChunkpos();
```

:::

:::group{name=getLevel}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// StructureSpawnEvent.getLevel() as Level

myStructureSpawnEvent.getLevel();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)?

```zenscript
// StructureSpawnEvent.getPlayer() as Player?

myStructureSpawnEvent.getPlayer();
```

:::

:::group{name=getSectionpos}

Return Type: [SectionPos](/mods/sdmcrtplus/utils/math/SectionPos)

```zenscript
// StructureSpawnEvent.getSectionpos() as SectionPos

myStructureSpawnEvent.getSectionpos();
```

:::

:::group{name=getStructure}

Return Type: [Structure](/mods/sdmcrtplus/world/level/levelgen/structure/Structure)

```zenscript
// StructureSpawnEvent.getStructure() as Structure

myStructureSpawnEvent.getStructure();
```

:::

:::group{name=getStructureManager}

Return Type: [StructureManager](/mods/sdmcrtplus/world/level/StructureManager)

```zenscript
// StructureSpawnEvent.getStructureManager() as StructureManager

myStructureSpawnEvent.getStructureManager();
```

:::

:::group{name=setStructure}

```zenscript
StructureSpawnEvent.setStructure(structure as ResourceLocation)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| structure | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::


