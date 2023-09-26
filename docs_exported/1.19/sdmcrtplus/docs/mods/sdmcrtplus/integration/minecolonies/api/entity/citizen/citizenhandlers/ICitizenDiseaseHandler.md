# ICitizenDiseaseHandler

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.entity.citizen.citizenhandlers.ICitizenDiseaseHandler;
```


## Methods

:::group{name=cure}

```zenscript
// ICitizenDiseaseHandler.cure()

myICitizenDiseaseHandler.cure();
```

:::

:::group{name=getDisease}

Return Type: string

```zenscript
// ICitizenDiseaseHandler.getDisease() as string

myICitizenDiseaseHandler.getDisease();
```

:::

:::group{name=isHurt}

Return Type: boolean

```zenscript
// ICitizenDiseaseHandler.isHurt() as boolean

myICitizenDiseaseHandler.isHurt();
```

:::

:::group{name=isSick}

Return Type: boolean

```zenscript
// ICitizenDiseaseHandler.isSick() as boolean

myICitizenDiseaseHandler.isSick();
```

:::

:::group{name=onCollission}

```zenscript
ICitizenDiseaseHandler.onCollission(var1 as AbstractEntityCitizen)
```

| Parameter |                                                    Type                                                     |
|-----------|-------------------------------------------------------------------------------------------------------------|
| var1      | [AbstractEntityCitizen](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/AbstractEntityCitizen) |


:::

:::group{name=read}

```zenscript
ICitizenDiseaseHandler.read(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::

:::group{name=setSleepsAtHospital}

```zenscript
// ICitizenDiseaseHandler.setSleepsAtHospital()

myICitizenDiseaseHandler.setSleepsAtHospital();
```

:::

:::group{name=sleepsAtHospital}

Return Type: boolean

```zenscript
// ICitizenDiseaseHandler.sleepsAtHospital() as boolean

myICitizenDiseaseHandler.sleepsAtHospital();
```

:::

:::group{name=tick}

```zenscript
// ICitizenDiseaseHandler.tick()

myICitizenDiseaseHandler.tick();
```

:::

:::group{name=write}

```zenscript
ICitizenDiseaseHandler.write(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::


