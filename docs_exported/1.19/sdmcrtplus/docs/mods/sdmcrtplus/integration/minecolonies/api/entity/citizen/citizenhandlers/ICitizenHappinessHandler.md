# ICitizenHappinessHandler

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.entity.citizen.citizenhandlers.ICitizenHappinessHandler;
```


## Methods

:::group{name=addModifier}

```zenscript
ICitizenHappinessHandler.addModifier(var1 as IHappinessModifier)
```

| Parameter |                                                  Type                                                   |
|-----------|---------------------------------------------------------------------------------------------------------|
| var1      | [IHappinessModifier](/mods/sdmcrtplus/integration/minecolonies/api/entity/happiness/IHappinessModifier) |


:::

:::group{name=getHappiness}

Return Type: double

```zenscript
ICitizenHappinessHandler.getHappiness(var1 as IColony, var2 as ICitizenData) as double
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)           |
| var2      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=getModifier}

Return Type: [IHappinessModifier](/mods/sdmcrtplus/integration/minecolonies/api/entity/happiness/IHappinessModifier)

```zenscript
ICitizenHappinessHandler.getModifier(var1 as string) as IHappinessModifier
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=getModifiers}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// ICitizenHappinessHandler.getModifiers() as stdlib.List<string>

myICitizenHappinessHandler.getModifiers();
```

:::

:::group{name=processDailyHappiness}

```zenscript
ICitizenHappinessHandler.processDailyHappiness(var1 as ICitizenData)
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=read}

```zenscript
ICitizenHappinessHandler.read(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::

:::group{name=resetModifier}

```zenscript
ICitizenHappinessHandler.resetModifier(var1 as string)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=write}

```zenscript
ICitizenHappinessHandler.write(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::


