# IBlockAdded

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.functions.IBlockAdded;
```


## Methoden

:::group{name=apply}

Return Type: void

```zenscript
IBlockAdded.apply(state as MCBlockState, world as MCWorld, pos as BlockPos, oldState as MCBlockState, isMoving as boolean) as void
```

| Parameter | Type                                            | Beschreibung            |
| --------- | ----------------------------------------------- | ----------------------- |
| state     | [MCBlockState](/vanilla/api/block/MCBlockState) | No Description Provided |
| world     | [MCWorld](/vanilla/api/world/MCWorld)           | No Description Provided |
| pos       | [BlockPos](/vanilla/api/util/BlockPos)          | No Description Provided |
| oldState  | [MCBlockState](/vanilla/api/block/MCBlockState) | No Description Provided |
| isMoving  | boolean                                         | No Description Provided |


:::


