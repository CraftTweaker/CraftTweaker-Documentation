# ICitizenMournHandler

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.entity.citizen.citizenhandlers.ICitizenMournHandler;
```


## Methods

:::group{name=addDeceasedCitizen}

```zenscript
ICitizenMournHandler.addDeceasedCitizen(var1 as string)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=clearDeceasedCitizen}

```zenscript
// ICitizenMournHandler.clearDeceasedCitizen()

myICitizenMournHandler.clearDeceasedCitizen();
```

:::

:::group{name=getDeceasedCitizens}

Return Type: Set&lt;string&gt;

```zenscript
// ICitizenMournHandler.getDeceasedCitizens() as Set<string>

myICitizenMournHandler.getDeceasedCitizens();
```

:::

:::group{name=isMourning}

Return Type: boolean

```zenscript
// ICitizenMournHandler.isMourning() as boolean

myICitizenMournHandler.isMourning();
```

:::

:::group{name=read}

```zenscript
ICitizenMournHandler.read(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::

:::group{name=removeDeceasedCitizen}

```zenscript
ICitizenMournHandler.removeDeceasedCitizen(var1 as string)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=setMourning}

```zenscript
ICitizenMournHandler.setMourning(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=shouldMourn}

Return Type: boolean

```zenscript
// ICitizenMournHandler.shouldMourn() as boolean

myICitizenMournHandler.shouldMourn();
```

:::

:::group{name=write}

```zenscript
ICitizenMournHandler.write(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::


