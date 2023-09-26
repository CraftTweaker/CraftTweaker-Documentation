# IGraveData

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.IGraveData;
```


## Methods

:::group{name=getCitizenDataNBT}

Return Type: [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag)?

```zenscript
// IGraveData.getCitizenDataNBT() as CompoundTag?

myIGraveData.getCitizenDataNBT();
```

:::

:::group{name=getCitizenJobName}

Return Type: string?

```zenscript
// IGraveData.getCitizenJobName() as string?

myIGraveData.getCitizenJobName();
```

:::

:::group{name=getCitizenName}

Return Type: string?

```zenscript
// IGraveData.getCitizenName() as string?

myIGraveData.getCitizenName();
```

:::

:::group{name=setCitizenDataNBT}

```zenscript
IGraveData.setCitizenDataNBT(var1 as CompoundTag?)
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag)? |


:::

:::group{name=setCitizenJobName}

```zenscript
IGraveData.setCitizenJobName(var1 as string?)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | string? |


:::

:::group{name=setCitizenName}

```zenscript
IGraveData.setCitizenName(var1 as string?)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | string? |


:::


