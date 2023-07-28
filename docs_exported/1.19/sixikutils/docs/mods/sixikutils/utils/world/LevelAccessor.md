# LevelAccessor

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.misc.world.LevelAccessor;
```


## Methods

:::group{name=getChunkSource}

Return Type: [ChunkSource](/mods/sixikutils/utils/world/ChunkSource)

```zenscript
// LevelAccessor.getChunkSource() as ChunkSource

myLevelAccessor.getChunkSource();
```

:::

:::group{name=getLevel}

Return Type: [Level](/mods/sixikutils/pmmo/server/world)

```zenscript
// LevelAccessor.getLevel() as Level

myLevelAccessor.getLevel();
```

:::

:::group{name=getLevelData}

Return Type: [LevelData](/mods/sixikutils/utils/world/LevelData)

```zenscript
// LevelAccessor.getLevelData() as LevelData

myLevelAccessor.getLevelData();
```

:::

:::group{name=getServer}

Return Type: [Server](/mods/sixikutils/utils/game/ExpandServer)

```zenscript
// LevelAccessor.getServer() as Server

myLevelAccessor.getServer();
```

:::


## Properties

|    Name     |                          Type                           | Has Getter | Has Setter |
|-------------|---------------------------------------------------------|------------|------------|
| chunkSource | [ChunkSource](/mods/sixikutils/utils/world/ChunkSource) | true       | false      |
| level       | [Level](/mods/sixikutils/pmmo/server/world)             | true       | false      |
| levelData   | [LevelData](/mods/sixikutils/utils/world/LevelData)     | true       | false      |
| server      | [Server](/mods/sixikutils/utils/game/ExpandServer)      | true       | false      |

