# IVisitorData

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.IVisitorData;
```


## Implemented Interfaces
IVisitorData implements the following interfaces. That means all methods defined in these interfaces are also available in IVisitorData

- [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData)

## Methods

:::group{name=getRecruitCost}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// IVisitorData.getRecruitCost() as ItemStack

myIVisitorData.getRecruitCost();
```

:::

:::group{name=getSittingPosition}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// IVisitorData.getSittingPosition() as BlockPos

myIVisitorData.getSittingPosition();
```

:::

:::group{name=setCustomTexture}

```zenscript
IVisitorData.setCustomTexture(uuid as string)
```

| Parameter |  Type  |
|-----------|--------|
| uuid      | string |


:::

:::group{name=setRecruitCosts}

```zenscript
IVisitorData.setRecruitCosts(var1 as ItemStack)
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| var1      | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=setSittingPosition}

```zenscript
IVisitorData.setSittingPosition(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::


