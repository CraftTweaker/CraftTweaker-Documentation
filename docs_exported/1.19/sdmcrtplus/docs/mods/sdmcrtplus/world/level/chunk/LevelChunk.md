# LevelChunk

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.level.LevelChunk;
```


## Implemented Interfaces
LevelChunk implements the following interfaces. That means all methods defined in these interfaces are also available in LevelChunk

- [ICapabilityProviderImpl](/forge/api/capability/ICapabilityProviderImpl)&lt;[LevelChunk](/mods/sdmcrtplus/world/level/chunk/LevelChunk)&gt;

## Methods

:::group{name=getLevel}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// LevelChunk.getLevel() as Level

myLevelChunk.getLevel();
```

:::

:::group{name=isEmpty}

Return Type: boolean

```zenscript
// LevelChunk.isEmpty() as boolean

myLevelChunk.isEmpty();
```

:::


## Properties

|  Name   |               Type                | Has Getter | Has Setter |
|---------|-----------------------------------|------------|------------|
| isEmpty | boolean                           | true       | false      |
| level   | [Level](/vanilla/api/world/Level) | true       | false      |

