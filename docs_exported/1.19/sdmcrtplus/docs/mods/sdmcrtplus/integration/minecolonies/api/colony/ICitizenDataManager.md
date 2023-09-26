# ICitizenDataManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.ICitizenDataManager;
```


## Methods

:::group{name=createFromNBT}

Return Type: [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData)

```zenscript
ICitizenDataManager.createFromNBT(var1 as CompoundTag, var2 as IColony) as ICitizenData
```

| Parameter |                                  Type                                   |
|-----------|-------------------------------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag)                         |
| var2      | [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony) |


:::


