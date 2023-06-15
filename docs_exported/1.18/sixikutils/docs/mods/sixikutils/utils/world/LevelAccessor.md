# LevelAccessor

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.crafttweakerutils.api.misc.world.LevelAccessor;
```


## Methods

:::group{name=getChunkSource}

Return Type: [ChunkSource](/mods/sixikutils/utils/world/ChunkSource)

```zenscript
// LevelAccessor.getChunkSource() as ChunkSource

myLevelAccessor.getChunkSource();
```

:::

:::group{name=getLevelData}

Return Type: **invalid**

```zenscript
// LevelAccessor.getLevelData() as invalid

myLevelAccessor.getLevelData();
```

:::


## Properties

|    Name     |                          Type                           | Has Getter | Has Setter |
|-------------|---------------------------------------------------------|------------|------------|
| chunkSource | [ChunkSource](/mods/sixikutils/utils/world/ChunkSource) | true       | false      |
| levelData   | **invalid**                                             | true       | false      |

