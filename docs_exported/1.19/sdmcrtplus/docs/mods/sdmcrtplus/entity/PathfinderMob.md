# PathfinderMob

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.entity.PathfinderMob;
```


## Extending Mob

PathfinderMob extends [Mob](/mods/sdmcrtplus/entity/Mob). That means all methods available in [Mob](/mods/sdmcrtplus/entity/Mob) are also available in PathfinderMob

## Methods

:::group{name=getWalkTargetValue}

Return Type: float

```zenscript
PathfinderMob.getWalkTargetValue(blockPos as BlockPos) as float
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| blockPos  | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::


