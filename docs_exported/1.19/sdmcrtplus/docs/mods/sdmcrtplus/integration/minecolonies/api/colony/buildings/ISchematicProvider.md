# ISchematicProvider

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.buildings.ISchematicProvider;
```


## Methods

:::group{name=clearDirty}

```zenscript
// ISchematicProvider.clearDirty()

myISchematicProvider.clearDirty();
```

:::

:::group{name=getBlueprintPath}

Return Type: string

```zenscript
// ISchematicProvider.getBlueprintPath() as string

myISchematicProvider.getBlueprintPath();
```

:::

:::group{name=getBuildingLevel}

Return Type: int

```zenscript
// ISchematicProvider.getBuildingLevel() as int

myISchematicProvider.getBuildingLevel();
```

:::

:::group{name=getChildren}

Return Type: stdlib.List&lt;[BlockPos](/vanilla/api/util/math/BlockPos)&gt;

```zenscript
// ISchematicProvider.getChildren() as stdlib.List<BlockPos>

myISchematicProvider.getChildren();
```

:::

:::group{name=getCorners}

Return Type: [Tuple](/mods/sdmcrtplus/utils/core/Tuple)&lt;[BlockPos](/vanilla/api/util/math/BlockPos),[BlockPos](/vanilla/api/util/math/BlockPos)&gt;

```zenscript
// ISchematicProvider.getCorners() as Tuple<BlockPos,BlockPos>

myISchematicProvider.getCorners();
```

:::

:::group{name=getID}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// ISchematicProvider.getID() as BlockPos

myISchematicProvider.getID();
```

:::

:::group{name=getMaxBuildingLevel}

Return Type: int

```zenscript
// ISchematicProvider.getMaxBuildingLevel() as int

myISchematicProvider.getMaxBuildingLevel();
```

:::

:::group{name=getParent}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// ISchematicProvider.getParent() as BlockPos

myISchematicProvider.getParent();
```

:::

:::group{name=getPosition}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// ISchematicProvider.getPosition() as BlockPos

myISchematicProvider.getPosition();
```

:::

:::group{name=getRotation}

Return Type: int

```zenscript
// ISchematicProvider.getRotation() as int

myISchematicProvider.getRotation();
```

:::

:::group{name=getSchematicName}

Return Type: string

```zenscript
// ISchematicProvider.getSchematicName() as string

myISchematicProvider.getSchematicName();
```

:::

:::group{name=getStructurePack}

Return Type: string

```zenscript
// ISchematicProvider.getStructurePack() as string

myISchematicProvider.getStructurePack();
```

:::

:::group{name=hasParent}

Return Type: boolean

```zenscript
// ISchematicProvider.hasParent() as boolean

myISchematicProvider.hasParent();
```

:::

:::group{name=isDeconstructed}

Return Type: boolean

```zenscript
// ISchematicProvider.isDeconstructed() as boolean

myISchematicProvider.isDeconstructed();
```

:::

:::group{name=isDirty}

Return Type: boolean

```zenscript
// ISchematicProvider.isDirty() as boolean

myISchematicProvider.isDirty();
```

:::

:::group{name=isMirrored}

Return Type: boolean

```zenscript
// ISchematicProvider.isMirrored() as boolean

myISchematicProvider.isMirrored();
```

:::

:::group{name=markDirty}

```zenscript
// ISchematicProvider.markDirty()

myISchematicProvider.markDirty();
```

:::

:::group{name=setBlueprintPath}

```zenscript
ISchematicProvider.setBlueprintPath(var1 as string)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=setBuildingLevel}

```zenscript
ISchematicProvider.setBuildingLevel(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=setCorners}

```zenscript
ISchematicProvider.setCorners(var1 as BlockPos, var2 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=setDeconstructed}

```zenscript
// ISchematicProvider.setDeconstructed()

myISchematicProvider.setDeconstructed();
```

:::

:::group{name=setIsMirrored}

```zenscript
ISchematicProvider.setIsMirrored(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=setParent}

```zenscript
ISchematicProvider.setParent(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=setStructurePack}

```zenscript
ISchematicProvider.setStructurePack(var1 as string)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::


