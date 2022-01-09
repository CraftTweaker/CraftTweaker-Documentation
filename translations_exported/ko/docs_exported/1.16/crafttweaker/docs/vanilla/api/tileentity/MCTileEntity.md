# MCTileEntity

Represents a block entity.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tileentity.MCTileEntity;
```


## Methods

:::group{name=updateData}

Return Type: void

```zenscript
MCTileEntity.updateData(data as MapData) as void
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| data      | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::


## Properties

| 이름    | Type                                   | Has Getter | Has Setter | Description             |
| ----- | -------------------------------------- | ---------- | ---------- | ----------------------- |
| data  | [MapData](/vanilla/api/data/MapData)   | true       | false      | No Description Provided |
| pos   | [BlockPos](/vanilla/api/util/BlockPos) | true       | false      | No Description Provided |
| world | [MCWorld](/vanilla/api/world/MCWorld)  | true       | false      | No Description Provided |

