# SectionPos

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.math.SectionPos;
```


## Extending Vec3i

SectionPos extends [Vec3i](/vanilla/api/util/math/Vec3i). That means all methods available in [Vec3i](/vanilla/api/util/math/Vec3i) are also available in SectionPos

## Methods

:::group{name=center}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// SectionPos.center() as BlockPos

mySectionPos.center();
```

:::

:::group{name=chunk}

Return Type: [ChunkPos](/mods/sdmcrtplus/world/level/ChunkPos)

```zenscript
// SectionPos.chunk() as ChunkPos

mySectionPos.chunk();
```

:::

:::group{name=maxBlockX}

Return Type: int

```zenscript
// SectionPos.maxBlockX() as int

mySectionPos.maxBlockX();
```

:::

:::group{name=maxBlockY}

Return Type: int

```zenscript
// SectionPos.maxBlockY() as int

mySectionPos.maxBlockY();
```

:::

:::group{name=maxBlockZ}

Return Type: int

```zenscript
// SectionPos.maxBlockZ() as int

mySectionPos.maxBlockZ();
```

:::

:::group{name=minBlockX}

Return Type: int

```zenscript
// SectionPos.minBlockX() as int

mySectionPos.minBlockX();
```

:::

:::group{name=minBlockY}

Return Type: int

```zenscript
// SectionPos.minBlockY() as int

mySectionPos.minBlockY();
```

:::

:::group{name=minBlockZ}

Return Type: int

```zenscript
// SectionPos.minBlockZ() as int

mySectionPos.minBlockZ();
```

:::


